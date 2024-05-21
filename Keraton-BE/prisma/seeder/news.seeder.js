const { throwError } = require("../../routes/utils/helper");
const { prisma } = require("../../routes/utils/prisma");

const news = [
  {
    title: "Ambatukam maling",
    desc: "Ditemukan jasad 1 orang",
    image: "https://picsum.photos/200/300"
  },
  {
    title: "Disnut Membeli sayur",
    desc: "Berjalan 1 KM",
    image: "https://picsum.photos/200/300"
  },
  {
    title: "Kambing beli sayur",
    desc: "Sayur dimakan Kambing",
    image: "https://picsum.photos/200/300"
  },
];

const newsSeed = async () => {
  try {
    return await prisma.news.createMany({ data: news })
  } catch (err) {
    throwError(err);
  }
};

module.exports = { newsSeed };
