const { throwError } = require("../../utils/helper");
const { prisma } = require("../../utils/prisma");


const isExist = async (id) => {
  try {
    return await prisma.orderType.findFirst({ where: { id: id } });
  } catch (err) {
    throwError(err);
  }
};

const getAll = async () => {
  try {
    return await prisma.orderType.findMany();
  } catch (err) {
    throwError(err);
  }
};

const create = async (data) => {
  try {
    return await prisma.orderType.create({ data });
  } catch (err) {
    throwError(err);
  }
};

const update = async (id, data) => {
  try {
    const orderType = await isExist(id);
    if (!orderType) throw Error("Order Type ID tidak ditemukan");
    return await prisma.orderType.update({ where: { id }, data });
  } catch (err) {
    throwError(err);
  }
};

const deleteOrderType = async (id) => {
  try {
    const order = await isExist(id);
    if (!order) throw Error("Order Type ID tidak ditemukan");
    return await prisma.orderType.delete({ where: { id } });
  } catch (err) {
    throwError(err);
  }
};

module.exports = { isExist, getAll, create, update, deleteOrderType };
