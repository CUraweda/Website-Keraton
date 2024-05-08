const { throwError, startDate, endDate } = require("../../utils/helper");
const { prisma } = require("../../utils/prisma");

const findUser = async (name) => {
  try {
    return await prisma.user.findFirst({ where: { name: name } });
  } catch (err) {
    throwError(err);
  }
};
const getRevenue = async () => {
  try {
    const transaction = await prisma.transaction.findMany({
      where: { createdDate: { gte: startDate, lte: endDate } },
    });
    const total = parseInt(
      transaction.reduce((acc, curr) => acc + parseInt(curr.total), 0)
    );
    return total;
  } catch (err) {
    throwError(err);
  }
};
const create = async (data, username, nationality) => {
  try {
    const order = data.order;
    delete data.name;
    delete data.nationality;
    delete data.order;
    const user = await findUser(username);
    const transactionData = {
      user: {
        connect: { id: user.id },
      },
      nationality: nationality
        ? {
            connect: { id: nationality },
          }
        : {},
    };

    Object.assign(transactionData, data);
    const transaction = await prisma.transaction.create({
      data: transactionData,
    });
    createDetail(order, transaction);
  } catch (err) {
    throwError(err);
  }
};
const createDetail = async (order, transaction) => {
  try {
    for (const o of order) {
      await prisma.detailTrans.create({
        data: {
          amount: o.amount,
          transaction: {
            connect: {
              id: transaction.id,
            },
          },
          guide: o.guideId
            ? {
                connect: {
                  id: o.guideId,
                },
              }
            : {},
          order: {
            connect: {
              id: o.id,
            },
          },
        },
      });
    }
  } catch (err) {
    throwError(err);
  }
};

module.exports = { getRevenue, create };
