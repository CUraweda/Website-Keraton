const { throwError } = require("../../utils/helper");
const { prisma } = require("../../utils/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getUser = async (email) => {
  try {
    return await prisma.user.findFirst({ where: { email: email } });
  } catch (err) {
    throwError(err);
  }
};
const isExist = async (id) => {
  try {
    return await prisma.user.findFirst({
      where: { id: id },
    });
  } catch (err) {
    throwError(err);
  }
};
const logIn = async (body) => {
  const { email, password } = body;
  try {
    const user = await getUser(email);
    if (!user) throw new Error("Username tidak ditemukan!");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Password tidak sesuai");

    const token = jwt.sign(user, process.env.SECRET_KEY_AUTH);

    return token;
  } catch (err) {
    throwError(err);
  }
};
const signUp = async (data) => {
  try {
    const { email, password, name } = data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: "CUSTOMER",
      },
    });

    const newDataForLog = {
      email: newUser.email,
      password: password,
    };

    const token = await logIn(newDataForLog);
    return token;
  } catch (err) {
    throwError(err);
  }
};

module.exports = { getUser, isExist, logIn, signUp };
