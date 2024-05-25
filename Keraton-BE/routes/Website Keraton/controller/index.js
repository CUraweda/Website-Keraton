var express = require("express");
var router = express.Router();
const controlContent = require("../controller/contents.controller");
const controlPage = require("../controller/pages.controller");
const controlAuth = require("../controller/auth.controller");
const controlEvent = require("../controller/event.controller");
const controlOrder = require("./order.controller");
const controlIteration = require("../controller/eventIterarion.controller");
const controlNews = require("../controller/news.controller");
const controlSubscribe = require("../controller/subscriber.controller");
const controlCart = require("../controller/carts.controller");
const controlTransaction = require('../controller/transaction.controller')

router.use("/content", controlContent);
router.use("/page", controlPage);
router.use("/auth", controlAuth);
router.use("/event", controlEvent);
router.use("/news", controlNews);
router.use('/trans', controlTransaction)
router.use("/items", controlOrder);
router.use("/cart", controlCart);
router.use("/subscribe", controlSubscribe);
router.use("/iteration", controlIteration);

module.exports = router;
