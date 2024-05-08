const { expressRouter } = require("../../utils/router");
const { error, success } = require("../../utils/response");
const detailTransModel = require("../models/detailTrans.models");

expressRouter.get("/transaction-invoice", async (req, res) => {
  try {
    const data = await detailTransModel.getAll(req.query.search);
    return success(res, "Data Transaksi berhasil di-fetch!", data);
  } catch (err) {
    return error(res, err.message);
  }
});

module.exports = expressRouter;
