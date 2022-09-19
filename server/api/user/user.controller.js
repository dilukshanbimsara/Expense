const {
  select,
  insert,
  deleteex,
  getSubscriptionsum,
  getFoodsum,
  getMedicinesum,
  getOthersum,
  getTransportsum,
} = require("./user.service");

module.exports = {
  getExpence: (req, res) => {
    select((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  addExpence: (req, res) => {
    const data = req.body;
    insert(data, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: result,
      });
    });
  },
  deleteExpence: (req, res) => {
    const data = req.body;
    deleteex(data, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: result,
      });
    });
  },
  getFoodSum: (req, res) => {
    getFoodsum((err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: result,
      });
    });
  },
  getTransportSum: (req, res) => {
    getTransportsum((err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: result,
      });
    });
  },
  getMedicineSum: (req, res) => {
    getMedicinesum((err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: result,
      });
    });
  },
  getSubscriptionSum: (req, res) => {
    getSubscriptionsum((err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: result,
      });
    });
  },
  getOtherSum: (req, res) => {
    getOthersum((err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: result,
      });
    });
  },
};
