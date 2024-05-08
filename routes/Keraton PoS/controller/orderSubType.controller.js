const { expressRouter } = require("../../utils/router");
const { error, success } = require("../../utils/response");
const orderSubTypeModel = require("../models/orderSubType.models");

expressRouter.get("/sub-type-details", async (req, res) => {
  try {
    const data = await orderSubTypeModel.getAll();
    return success(res, "Data Order Sub Type berhasil di-fetch!", data);
  } catch (err) {
    return error(res, err.message);
  }
});
expressRouter.post(
  "/sub-type-action/:action/:id?",
  async (req, res) => {
    try {
      switch (req.params.action) {
        case "create":
          const data = await orderSubTypeModel.create(req.body);
          return success(res, "Penambahan sub tipe pesanan berhasil", data);
        case "update":
          await orderSubTypeModel.update(req.params.id, req.body);
          return success(res, "Update sub tipe pesanan berhasil!");
        case "delete":
          await orderSubTypeModel.deleteOrderSubType(req.params.id);
          return success(res, "Penghapusan sub tipe pesanan berhasil!");
        default:
          throw new Error(`Aksi ${action} tidak ditemukan`);
      }
    } catch (err) {
      return error(res, err.message);
    }
  }
);

module.exports = expressRouter;
