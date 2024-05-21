var express = require('express');
const { error, success } = require('../../utils/response');
const cartModel = require('../models/carts.model');
const { auth } = require('../middlewares/auth');
const { route } = require('./contents.controller');
var router = express.Router();

router.post('/break', auth([]), async (req, res) =>  {
    try{
        const carts = await cartModel.action('break', req.user.id, Object.values(res.body.carts))
        return success(res, 'Cart Successfully Deleted', carts)
    }catch(err){
        return error(res, err.message)
    }
})

router.get('/', auth([]), async (req, res) => {
    const { carts } = req.user
    try{
        return success(res, 'Success', carts)
    }catch(err){
        return error(res, err.message)
    }
})

router.post('/update', auth([]), async (req, res) => {
    try{
        const data = await cartModel.updateCart(req.user.id, req.body.cart)
        return data
    }catch(err){
        return error(res, err.message)
    }
})

module.exports = router