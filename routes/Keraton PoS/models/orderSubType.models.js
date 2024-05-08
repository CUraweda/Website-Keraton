const { throwError } = require("../../utils/helper");
const { prisma } = require("../../utils/prisma");


const isExist = async (id) => {
  try {
    return await prisma.orderSubType.findFirst({ where: { id: id } });
  } catch (err) {
    throwError(err);
  }
};

const getAll = async () => {
  try {
    return await prisma.orderSubType.findMany();
  } catch (err) {
    throwError(err);
  }
};

const create = async (data) => {
  try {
    return await prisma.orderSubType.create({ data });
  } catch (err) {
    throwError(err);
  }
};

const update = async (id, data) => {
  try {
    const orderSubType = await isExist(id);
    if (!orderSubType) throw Error("Order Type ID tidak ditemukan");
    return await prisma.orderSubType.update({ where: { id }, data });
  } catch (err) {
    throwError(err);
  }
};

const deleteOrderSubType = async (id) => {
  try {
    const order = await isExist(id);
    if (!order) throw Error("Order Type ID tidak ditemukan");
    return await prisma.orderSubType.delete({ where: { id } });
  } catch (err) {
    throwError(err);
  }
};

module.exports = { isExist, getAll, create, update, deleteOrderSubType };
