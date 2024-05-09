const {
  writeLog,
  throwError,
  startDate,
  endDate,
  groupedPurchase,
  groupYearData,
  groupMonthData,
} = require("../../utils/helper");
const { prisma } = require("../../utils/prisma");
const categoryModel = require("./category.models");
const detailTransModel = require("./detailTrans.models");
const transactionModel = require("./transaction.models");

const isExist = async (id) => {
  try {
    return await prisma.order.findFirst({ where: { id: id } });
  } catch (err) {
    throwError(err);
  }
};
const getOne = async (id) => {
  try {
    return await prisma.order.findFirst({ where: { id: id } });
  } catch (err) {
    throwError(err);
  }
};
const getAll = async () => {
  try {
    return await prisma.order.findMany({ include: { category: true } });
  } catch (err) {
    throwError(err);
  }
};
const getRecentData = async () => {
  try {
    return await prisma.order.findMany({
      include: {
        category: true,
        detailTrans: {
          include: {
            transaction: true,
          },
          where: {
            transaction: {
              createdDate: {
                gte: startDate,
                lte: endDate,
              },
            },
          },
        },
      },
    });
  } catch (err) {
    throwError(err);
  }
};
const create = async (data) => {
  try {
    return await prisma.order.create({ data });
  } catch (err) {
    throwError(err);
  }
};
const update = async (id, data) => {
  try {
    const order = await isExist(id);
    if (!order) throw Error("Order ID tidak ditemukan");
    return await prisma.order.update({ where: { id }, data });
  } catch (err) {
    throwError(err);
  }
};
const deleteOrder = async (id) => {
  try {
    const order = await isExist(id);
    if (!order) throw Error("Order ID tidak ditemukan");
    const detailTrans = await detailTransModel.getFromOrderId(order.id);
    if (detailTrans) {
      const transaction = await transactionModel.getOne(
        detailTrans.transactionID
      );
      await transactionModel.updateTransData(transaction, order, detailTrans);
      const deletedDetails = await detailTrans.deleteDetailTrans(
        detailTrans.id
      );
      for (const detail of deletedDetails) {
        writeLog(
          `Detail transaksi dengan ID ${detail.id} yang memiliki kaitan dengan pesanan ${order.name} berhasil dihapus.`
        );
      }
      if (transaction.total < 1) {
        await prisma.transaction.delete({
          where: { id: transaction.id },
        });
        writeLog(
          `Transaksi dengan ID ${transaction.id} juga dihapus karena nilai totalnya kosong.`
        );
      }
    }
    writeLog(
      `Pesanan ${order.name} (${order.category}) dengan ID ${order.id} berhasil dihapus.`
    );
    return await prisma.order.delete({ where: { id } });
  } catch (err) {
    throwError(err);
  }
};
const recentPurchase = async () => {
  try {
    const order = await getRecentData();
    const categories = await categoryModel.findPurchaseCategories();
    return groupedPurchase(order, categories);
  } catch (err) {
    throwError(err);
  }
};
const getYearData = async (targetYear) => {
  try {
    const startDate = new Date(`${targetYear}-01-01`);
    startDate.setHours(7, 0, 0, 0);
    const endDate = new Date(`${targetYear}-12-31`);
    endDate.setHours(30, 59, 59, 999);
    const categories = await categoryModel.getAll();

    const data = await getRecentData();

    const names = categories.map((category) => category.name);
    const colors = categories.map((category) => category.color);

    return groupYearData(data, names, colors);
  } catch (err) {
    throwError(err);
  }
};
const getMonthData = async (targetYear, targetMonthInt) => {
  try {
    const daysInMonth = new Date(targetYear, targetMonthInt, 0).getDate();
    const startTarget = new Date(`${targetYear}-${targetMonthInt}-01`);
    startTarget.setHours(7, 0, 0, 0);
    const endTarget = new Date(
      `${targetYear}-${targetMonthInt}-${daysInMonth}`
    );
    endTarget.setHours(30, 59, 59, 999);
    const categories = await categoryModel.getAll();

    const data = await getRecentData();

    const names = categories.map((category) => category.name);
    const colors = categories.map((category) => category.color);

    return groupMonthData(data, names, colors, daysInMonth);
  } catch (err) {
    throwError(err);
  }
};

module.exports = {
  isExist,
  getOne,
  getAll,
  create,
  update,
  deleteOrder,
  recentPurchase,
  getYearData,
  getMonthData,
};
