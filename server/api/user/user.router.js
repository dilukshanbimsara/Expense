const router = require("express").Router();

const {
  getExpence,
  addExpence,
  deleteExpence,
  getFoodSum,
  getTransportSum,
  getMedicineSum,
  getSubscriptionSum,
  getOtherSum,
} = require("./user.controller");

router.get("/", getExpence);
router.post("/add", addExpence);
router.post("/delete", deleteExpence);
router.get("/getFoodSum", getFoodSum);
router.get("/getTransportSum", getTransportSum);
router.get("/getMedicineSum", getMedicineSum);
router.get("/getSubscriptionSum", getSubscriptionSum);
router.get("/getOtherSum", getOtherSum);

module.exports = router;
