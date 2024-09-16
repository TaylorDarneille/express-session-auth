const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const db = require('./models')
const moment = require('moment')
const cryptoJS = require('crypto-js')
require('dotenv').config()
const methodOrride = require('method-override')

// MIDDLEWARE
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(methodOrride('_method'))
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

// middleware that allows us to access the 'moment' library in every EJS view
app.use((req, res, next) => {
    res.locals.moment = moment
    next()
  })

// AUTHENTICATION MIDDLEWARE
app.use(async (req, res, next)=>{
    if(req.cookies.userId) {
        const decryptedId = cryptoJS.AES.decrypt(req.cookies.userId, process.env.SECRET)
        const decryptedIdString = decryptedId.toString(cryptoJS.enc.Utf8)
        const user = await db.user.findByPk(decryptedIdString)
        res.locals.user = user
    } else res.locals.user = null
    next()
})

// CONTROLLERS
app.use('/users', require('./controllers/users'))

// ROUTES
app.get('/',async (req, res)=>{
    // const courses = await db.course.findAll()
    // res.render('courses.ejs', { course: courses })
    res.render('users/login.ejs')
})

app.listen(8000, ()=>{
    console.log('Project 2 Express Authentication')
})