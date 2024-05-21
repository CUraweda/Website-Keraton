const { expressRouter } = require("../../utils/router");
const { error, success } = require("../../utils/response");
const userModel = require("../models/user.models");
const { verif } = require("../middlewares/verif");
const bcrypt = require("bcrypt");
const { auth } = require("../middlewares/auth");

expressRouter.post("/register", async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return error(
      res,
      "Email, password, name, and password confirmation are required."
    );
  }

  try {
    const token = await userModel.signUp(req.body);
    return success(res, "Register akun berhasil", await token);
  } catch (err) {
    return error(res, err.message);
  }
});

expressRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return error(res, "Name and password are required.");
  }

  try {
    const data = await userModel.logIn(req.body);
    return success(res, "Login berhasil", data);
  } catch (err) {
    return error(res, err.message);
  }
});

expressRouter.get("/auth", auth([]), async (req, res) => {
  try {
    const data = await userModel.isExist(req.user.id);
    return success(res, "Autentikasi berhasil!", data);
  } catch (err) {
    return error(res, err.message);
  }
});

module.exports = expressRouter;
