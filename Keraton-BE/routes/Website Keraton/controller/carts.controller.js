var express = require('express');
const { error, success } = require('../../utils/response');
const cartModel = require('../models/carts.model');
const { auth } = require('../middlewares/auth');
var router = express.Router();

router.post('/break', auth([]), async (req, res) =>  {
    try{
        const carts = await cartModel.action('break', req.user.id, Object.values(res.body.carts))
        return success(res, 'Cart Successfully Deleted')
    }catch(err){
        return error(res, err.message)
    }
})