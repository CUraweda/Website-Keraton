const { expressRouter } = require("../../utils/router");
const { error, success } = require("../../utils/response");
const userModel = require("../models/user.models");
const { verif } = require("../middlewares/verif");
const bcrypt = require("bcrypt");
const { auth } = require("../middlewares/auth");
const cookieParser = require("cookie-parser");

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

expressRouter.get('/logout', auth([]), async (req, res) => {
  try{
    const deletedToken = await userModel.logOUt(req.user.id, req.token)
    return success(res, 'Log Out Success', deletedToken)
  }catch(err){
    return error(res, err.message)
  }
})

expressRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return error(res, "Name and password are required.");
  }

  if (password.length < 6) {
    return error(res, "password must be more than 6 characters or more")
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
    return success(res, "Autentikasi berhasil!", req.user);
  } catch (err) {
    return error(res, err.message);
  }
});

module.exports = expressRouter;
