const { throwError } = require("../../utils/helper")
const orderModel = require('../models/order.models')
const eventModel = require('../models/events.models')
const cartModel = require('../models/carts.model')
const { prisma } = require("../../utils/prisma")


const createNew = async (data) => {
    let { user, carts } = data 
    try{
        const totalTransaction = cartModel.countTotal(carts);''
        const createdTransacation = await prisma.transaction.create({ data: {  } })
        for(let cart of carts){
            // const created
        }
    }catch(err){
        throwError(err)
    }
}

const createDetail = async (data) => {
    try{
        return await prisma.detailTrans.create({ data })
    }catch(err){
        throwError(err)
    }
}
