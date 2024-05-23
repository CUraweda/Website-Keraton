const { expressRouter } = require("../../utils/router");
const { error, success } = require("../../utils/response");
const userModel = require("../models/user.models");
const { verif } = require("../middlewares/verif");
const bcrypt = require("bcrypt");

expressRouter.post("/register", async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return error(
      res,
      "Email, password, name, and password confirmation are required."
    );
  }

  if (password.length < 6) {
    return error(res, "password must be more than 6 characters or more")
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

  if (password.length < 6) {
    return error(res, "password must be more than 6 characters or more")
  }

  try {
    const token = await userModel.logIn(req.body);
    return success(res, "Login berhasil", { token });
  } catch (err) {
    return error(res, err.message);
  }
});

expressRouter.get("/auth", verif, async (req, res) => {
  try {
    const data = await userModel.isExist(req.user.id);
    return success(res, "Autentikasi berhasil!", data);
  } catch (err) {
    return error(res, err.message);
  }
});

module.exports = expressRouter;
