const { writeLog, throwError } = require("../../utils/helper");
const { prisma } = require("../../utils/prisma");

const isExist = async (id) => {
  try {
    return await prisma.order.findFirst({ where: { id: id } });
  } catch (err) {
    throwError(err);
  }
};

const findDetailTrans = async (id) => {
  try {
    return await prisma.detailTrans.findFirst({ where: { orderID: id } });
  } catch (err) {
    throwError(err);
  }
};

const findTrans = async (id) => {
  try {
    return await prisma.transaction.findFirst({ where: { id: id } });
  } catch (err) {
    throwError(err);
  }
};

const updateTrans = async (transaction = [], order = [], detailTrans = []) => {
  try {
    await prisma.transaction.update({
      where: { id: transaction.id },
      data: {
        total: (transaction.total -=
          order.price * detailTrans.amount + 3500 - transaction.discount),
      },
    });
  } catch (err) {
    throwError(err);
  }
};

const deleteDetailTrans = async (id) => {
  try {
    return await prisma.detailTrans.deleteMany({ where: { id: id } });
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
    return await prisma.order.findMany();
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
    const detailTrans = await findDetailTrans(order.id);
    if (detailTrans) {
      const transaction = await findTrans(detailTrans.transactionID);
      await updateTrans(transaction, order, detailTrans);
      const deletedDetails = await deleteDetailTrans(detailTrans.id);
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

module.exports = { isExist, getOne, getAll, create, update, deleteOrder };
