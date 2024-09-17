const express = require('express')
const db = require('../models')
const router = express.Router()
const cryptojs = require('crypto-js')
require('dotenv').config()
const bcrypt = require('bcrypt')


router.get('/product', async (req, res)=>{
    try {
        let allProducts = await db.user.findAll({
            include: [db.order]
        })
        res.render('home.ejs', {allProducts})
        console.log("hey ya"+allProducts)
    } catch(err) {
        res.send(err)
    }
})


module.exports = router