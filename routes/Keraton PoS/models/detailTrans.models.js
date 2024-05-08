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

module.exports = { getAll };
