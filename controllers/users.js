const express = require('express')
const db = require('../models')
const router = express.Router()
const cryptojs = require('crypto-js')
require('dotenv').config()
const bcrypt = require('bcrypt')
const { where } = require('sequelize')

router.get('/new', (req, res)=>{
    res.render('users/new.ejs')
})

router.post('/', async (req, res)=>{
    const [newUser, created] = await db.user.findOrCreate({where:{
        name:req.body.name,
        email: req.body.email
    }})
    if(!created){
        console.log('user already exists')
        res.render('users/login.ejs', {error: 'Looks like you already have an account! Try logging in :)'})
    } else {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)
        newUser.password = hashedPassword
        await newUser.save()
        const encryptedUserId = cryptojs.AES.encrypt(newUser.id.toString(), process.env.SECRET)
        const encryptedUserIdString = encryptedUserId.toString()
        res.cookie('userId', encryptedUserIdString)
        res.redirect('/')
    }
})

router.get('/login', (req, res)=>{
    res.render('users/login.ejs')
})

router.post('/login', async (req, res)=>{
    const user = await db.user.findOne({where: {email: req.body.email}})
    if(!user){
        console.log('user not found')
        res.render('users/login', { error: "Invalid email/password" })
    } else if(!bcrypt.compareSync(req.body.password, user.password)) {
        console.log('password incorrect')
        res.render('users/login', { error: "Invalid email/password" })
    } else {
        console.log('logging in the user!!!')
        const encryptedUserId = cryptojs.AES.encrypt(user.id.toString(), process.env.SECRET)
        const encryptedUserIdString = encryptedUserId.toString()
        res.cookie('userId', encryptedUserIdString)
        res.redirect('/users/courses')
    }
})

router.get('/logout', (req, res)=>{
    console.log('logging out')
    res.clearCookie('userId')
    res.redirect('/')
})

router.get('/profile', async (req, res)=>{
    const courses = await db.course.findAll()
    res.render('users/profile.ejs', { course: courses })
})

router.get('/courses', async (req, res)=>{
    const courses = await db.course.findAll()
    res.render('courses.ejs', { course: courses })
})

router.get('/courses/:id', (req, res)=>{
    db.course.findOne({
        where : {id : req.params.id}
        // where : {id : req.params.id}
    })
    .then(async (course) => {
        if (!course) throw Error()
        console.log('course', course)

        let allStudents = await course.getStudents()

        console.log('students', allStudents)

        res.render('students.ejs', { student: allStudents, course: course})
      })
      .catch((error) => {
        console.log(error)
        res.send(error)
      })
})

router.get('/courses/:courseId/student/:studentId', async (req,res)=>{
    const students = await db.student.findOne({
            where : {id : req.params.studentId},
            include: [db.comment]
        })
    
        // const comments = await db.comment.findAll()
        // res.send()
    res.render('./comments.ejs', {student: students, courseId: req.params.courseId})
})


router.post('/course/:courseId/comments/:studentId', async (req,res) =>{
    console.log('req.body', req.body)
    console.log('req.params', req.params)


    const student = await db.student.findByPk(req.params.studentId)

    const user = await db.user.findByPk(res.locals.user.id)

    const [newFeedback, created] = await db.comment.findOrCreate({
        where:  {
            week:req.body.week,
            feedback: req.body.feedback,
            userName: user.name,
            studentId: student.id
            }
        })

    res.redirect(`/users/courses/${req.params.courseId}/student/${req.params.studentId}`)
    // res.send('testing in progress...')
})


router.delete('/course/:courseId/comments/:studentId', async (req,res) =>{
    console.log('req.body', req.body)
    console.log('req.params', req.params)


    const student = await db.student.findByPk(req.params.studentId)

    const user = await db.user.findByPk(res.locals.user.id)

        // router.delete(`/users/courses/${req.params.courseId}/student/${req.params.studentId}`, async(req,res) =>{
            await db.comment.destroy({
                where:  {
                    week:req.body.week,
                    feedback: req.body.feedback,
                    userName: user.name,
                    studentId: student.id
                }})
        // })
    res.redirect(`/users/courses/${req.params.courseId}/student/${req.params.studentId}`)
    // res.send('testing in progress...')
})

// router.put('/course/:courseId/comments/:studentId', async (req,res) =>{
//     console.log('req.body', req.body)
//     console.log('req.params', req.params)


//     const student = await db.student.findByPk(req.params.studentId)

//     const user = await db.user.findByPk(res.locals.user.id)

//         router.update(`/users/courses/${req.params.courseId}/student/${req.params.studentId}`, async(req,res) =>{
//             await db.comment.update({
//                 where:  {
//                     week:req.body.week,
//                     feedback: req.body.feedback,
//                     userName: user.name,
//                     studentId: student.id
//                 }})
//         })
//     res.redirect(`/users/courses/${req.params.courseId}/student/${req.params.studentId}`)
    // res.send('testing in progress...')
// })

module.exports = router