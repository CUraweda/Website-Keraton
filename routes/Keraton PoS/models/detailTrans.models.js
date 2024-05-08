const { throwError } = require("../../utils/helper");
const { prisma } = require("../../utils/prisma");

const getAll = async (search) => {
  try {
    return await prisma.detailTrans.findMany({
      where: search
        ? {
            OR: [
              {
                transaction: {
                  user: {
                    name: {
                      contains: search,
                    },
                  },
                },
              },
              {
                order: {
                  name: {
                    contains: search,
                  },
                },
              },
            ],
          }
        : {},
      select: {
        order: {
          select: {
            name: true,
          },
        },
        transaction: {
          select: {
            plannedDate: true,
            method: true,
            user: {
              select: {
                name: true,
                email: true,
                number: true,
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

const getTableData = async (category) => {
  try {
    const detailTrans = await prisma.detailTrans.findMany({
      where: category
        ? { order: { category: category } }
        : {},
      select: {
        amount: true,
        transaction: {
          select: { createdDate: true },
        },
        order: {
          select: { id: true, name: true, category: true, price: true },
        },
      },
    });

    // Menghitung total harga pesanan dan menggabungkannya dengan hasil
    const finalDetailTrans = detailTrans.map((detailTrans) => ({
      ...detailTrans,
      total_price: detailTrans.amount * detailTrans.order.price,
    }));
    return finalDetailTrans
  } catch (err) {
    throwError;
  }
};

module.exports = { getAll, getTableData };
