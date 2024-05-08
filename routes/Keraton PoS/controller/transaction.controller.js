const { expressRouter } = require("../../utils/router");
const { error, success } = require("../../utils/response");
const transactionModel = require("../models/transaction.models");

expressRouter.post("/create-transaction", async (req, res) => {
  try {
    const data = await transactionModel.create(
      req.body,
      req.body.name,
      req.body.nationality
    );
    return success(res, "Penambahan pesanan berhasil", data);
  } catch (err) {
    return error(res, err.message);
  }
});

module.exports = expressRouter;