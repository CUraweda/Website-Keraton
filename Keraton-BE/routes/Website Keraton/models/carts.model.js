const { throwError } = require("../../utils/helper")
const { prisma } = require("../../utils/prisma")
const userModel = require('../models/user.models')

const action = async (actionParam, id, carts) => {
    try {
        const user = await validate(id, carts)
        let rawUserCarts = user.carts
        switch(actionParam){
            case "add":
                for (let cart of carts) rawUserCarts[cart.id] = cart
                break;
            case "break":
                for (let cart of carts) delete rawUserCarts[cart.id]
                break
            default:
                break
        }
        return await userModel.update(user.id, { carts: rawUserCarts })
    } catch (err) {
        throwError(err)
    }
}

const updateCart = async (id, carts) => {
    try{
        return await prisma.user.update({ where: { id }, data: { carts } })
    }catch(err){
        throwError(err)
    }
}

const validate  = async (id, carts) => {
    try{
        if (carts.length < 1) throw Error('No Item in carts')
        const user = await userModel.isExist({ id })
        if (!user) throw Error('User didnt exist')
        return user
    }catch(err){
        throwError(err)
    }
}

module.exports = { action, updateCart }