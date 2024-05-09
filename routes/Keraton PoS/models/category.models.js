const { throwError } = require("../../utils/helper");
const { prisma } = require("../../utils/prisma");

const isExist = async (id) => {
  try {
    return await prisma.category.findFirst({ where: { id: id } });
  } catch (err) {
    throwError(err);
  }
};

const getAll = async () => {
  try {
    return await prisma.category.findMany();
  } catch (err) {
    throwError(err);
  }
};

const create = async (data) => {
  try {
    return await prisma.category.create({ data });
  } catch (err) {
    throwError(err);
  }
};

const update = async (id, data) => {
  try {
    const category = await isExist(id);
    if (!category) throw Error("Order Sub Type ID tidak ditemukan");
    return await prisma.category.update({ where: { id }, data });
  } catch (err) {
    throwError(err);
  }
};

const deleteCategory = async (id) => {
  try {
    const order = await isExist(id);
    if (!order) throw Error("Order Sub Type ID tidak ditemukan");
    return await prisma.category.delete({ where: { id } });
  } catch (err) {
    throwError(err);
  }
};

const findPurchaseCategories = async () => {
  try {
    return await prisma.category.findMany({ select: { name: true } });
  } catch (err) {
    throwError(err);
  }
};

module.exports = {
  isExist,
  getAll,
  create,
  update,
  deleteCategory,
  findPurchaseCategories,
};
