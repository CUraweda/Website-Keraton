const { throwError } = require("../../routes/utils/helper");
const { prisma } = require("../../routes/utils/prisma");

const orders = [
  {
    name: "Tiket masuk Keraton Kasepuhan Cirebon",
    price: 10000.0,
    category: "UMUM",
  },
  {
    name: "Tiket masuk Keraton Kasepuhan Cirebon",
    price: 10000.0,
    category: "PELAJAR",
  },
  {
    name: "Tiket masuk Keraton Kasepuhan Cirebon",
    price: 10000.0,
    category: "MANCANEGARA",
  },
  {
    name: "Bundling tiket masuk Keraton Kasepuhan Cirebon",
    price: 30000.0,
    category: "UMUM",
  },
  {
    name: "Bundling tiket masuk Keraton Kasepuhan Cirebon",
    price: 30000.0,
    category: "PELAJAR",
  },
  {
    name: "Bundling tiket masuk Keraton Kasepuhan Cirebon",
    price: 30000.0,
    category: "MANCANEGARA",
  },
  {
    name: "Bertemu Pangeran",
    price: 25000.0,
    category: "UMUM",
  },
  {
    name: "Bertemu Pangeran",
    price: 25000.0,
    category: "PELAJAR",
  },
  {
    name: "Bertemu Pangeran",
    price: 25000.0,
    category: "MANCANEGARA",
  },
  {
    name: "Event bulanan",
    price: 15000.0,
    category: "UMUM",
  },
  {
    name: "Event bulanan",
    price: 15000.0,
    category: "PELAJAR",
  },
  {
    name: "Event bulanan",
    price: 15000.0,
    category: "MANCANEGARA",
  },
  {
    name: "Event mingguan",
    price: 15000.0,
    category: "UMUM",
  },
  {
    name: "Event mingguan",
    price: 15000.0,
    category: "PELAJAR",
  },
  {
    name: "Event mingguan",
    price: 15000.0,
    category: "MANCANEGARA",
  },
];

const orderSeed = async () => {
  try {
    await prisma.order.createMany({ data: orders });
  } catch (err) {
    throwError(err);
  }
};

module.exports = { orderSeed };
