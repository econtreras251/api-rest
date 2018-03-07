'use strict'

const express = require('express')
const api = express.Router()
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const productCtrl = require('../controllers/product')

api.get('/product', productCtrl.getProducts)
api.get('/product/:productId', productCtrl.getProduct)
api.post('/product', auth, productCtrl.saveProduct)
api.put('/product/:productId', auth, productCtrl.updateProduct)
api.delete('/product/:productId', auth, productCtrl.deleteProduct)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth,(req, res) => {
  res.status(200).send({ message: 'Tienes acceso' })
})

module.exports = api
