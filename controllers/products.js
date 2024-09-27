const express = require('express')
const db = require('../models')
const router = express.Router()


// router.get('/', (req,res) => {

    // async await .... db.products.getAll .. ... 
   
    router.get('/', async (req,res) => {

        try {
            let allProducts = await db.product.findAll() 
    
            res.render('products.ejs', {allProducts})
        } catch(err) {
            console.log(err)
            res.json(err)
        }
    })





module.exports = router