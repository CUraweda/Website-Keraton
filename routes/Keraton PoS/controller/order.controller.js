const { expressRouter } = require("../../utils/router");
const { error, success } = require("../../utils/response");
const { upload } = require("../../utils/helper");
const orderModel = require("../models/order.models");

expressRouter.get("/order-details/:id?", async (req, res) => {
  try {
    const { id } = req.params;
    const data = id
      ? await orderModel.getOne(req.params.id)
      : await orderModel.getAll();
    return success(res, "Data Order berhasil di-fetch!", data);
  } catch (err) {
    return error(res, err.message);
  }
});
expressRouter.post(
  "/order-action/:action/:id?",
  upload.single("image"),
  async (req, res) => {
    try {
      req.body.image = req.file
        ? req.file.originalname
        : req.body.imgName
        ? req.body.imgName
        : null;
      delete req.body.imgName;
      switch (req.params.action) {
        case "create":
          const data = await orderModel.create(req.body);
          return success(res, "Penambahan pesanan berhasil", data);
        case "update":
          await orderModel.update(req.params.id, req.body);
          return success(res, "Update pesanan berhasil!");
        case "delete":
          await orderModel.deleteOrder(req.params.id);
          return success(res, "Penghapusan pesanan berhasil!");
        default:
          throw new Error(`Aksi ${action} tidak ditemukan`);
      }
    } catch (err) {
      return error(res, err.message);
    }
  }
);

module.exports = expressRouter;
