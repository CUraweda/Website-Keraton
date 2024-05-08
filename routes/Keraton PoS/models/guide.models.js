const { throwError } = require("../../utils/helper")
const { prisma } = require("../../utils/prisma")

const isExist = async (id) => {
    try{
        return await prisma.guide.findFirst({ where: { id }})
    }catch(err){
        throwError(err)
    }
}

const getAll = async () => {
    try{
        return await prisma.guide.findMany()
    }catch(err){
        throwError(err)
    }
}

const create = async (data) => {
    try{
        return await prisma.guide.create({ data })
    }catch(err){
        throwError(err)
    }
}

const update = async (id, data) => {
    try{
        const exist = await isExist(id)
        if(!exist) throw Error('Guide ID tidak ditemukan')
        return await prisma.guide.update({ where: { id }, data })
    }catch(err){
        throwError(err)
    }
}

module.exports = { isExist, getAll, create, update }