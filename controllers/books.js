let express = require('express')
let router = express.Router()
const axios = require('axios')
const db = require('../models')


router.get('/', async (req,res) => {
  let Search = req.query.title
  let bookAPIData = await axios(`https://www.googleapis.com/books/v1/volumes?q=${Search}&key=${process.env.API_KEY}`)

  let bookResults = bookAPIData.data.items
  res.render('books/results.ejs', {books: bookResults })

})



router.get('/:bookId', async (req,res) => {
  // Get Details of ONE book
  let id = req.params.bookId
  let bookAPIId = await axios (`https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.API_KEY}`) 
  let reviews = await db.review.findAll({
    where: {bookId: id},
    include: [db.user]
 })
  // console.log(reviews)

  let bookDetails = bookAPIId.data
  // res.json({reviews})
  res.render('books/details.ejs', {book: bookDetails, reviews: reviews })
})


//add review to the book 
router.post('/:bookId', async (req,res)=>{
  if(res.locals.user){
  db.review.create({
      review:req.body.review,
      bookId:req.params.bookId,
      userId:res.locals.user.dataValues.id,
      include: [db.user, db.book]
  })
  .then((post) => {
      res.redirect(`/books/${req.params.bookId}`)

  })

  .catch((eror)=>{
      console.log("error", eror)
  })
  }else {
    // res.send("LOGIN!")
    res.render("error.ejs")
    
  }
})

 
  

module.exports = router