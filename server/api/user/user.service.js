const pool = require("../../config/database");



var date = new Date();
 
  // date.setDate(date.getDate() - 30);
  

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

 

  var minDate;
  
  if (String(day).length === 1) {
    minDate = `${year}-${month}-01`;
  }
  
  if (String(month).length === 1) {
    minDate = `${year}-0${month}-01`;
  }
  
  console.log("server min date : ",minDate)


module.exports = {
  select: (callBack) => {
    pool.query(`SELECT * FROM expence WHERE date >= ?`, [minDate], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },

  insert: (data, callBack) => {
    pool.query(
      `INSERT INTO expence (date,food,transport,medicine,subscription,other,note) VALUES (?,?,?,?,?,?,?)`,
      [
        data.date,
        data.food,
        data.transport,
        data.medicine,
        data.subscription,
        data.other,
        data.note,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteex: (data, callBack) => {
    console.log(data.date);
    pool.query(
      `DELETE FROM expence WHERE date = ?`,
      [data.date],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },

  getTransportsum: (callBack) => {
   
    pool.query(
      `SELECT SUM(transport) AS sum FROM expence WHERE date > ? `,
      [minDate],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },
  getFoodsum: callBack => {
  
    pool.query(
      `SELECT SUM(food) AS sum FROM expence WHERE date >= ?`,
      [minDate],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },
  getMedicinesum:callBack => {
 
    pool.query(
      `SELECT SUM(medicine) AS sum FROM expence WHERE date >= ?`,
      [minDate],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },
  getSubscriptionsum:callBack => {
    
    pool.query(
      `SELECT SUM(subscription) AS sum FROM expence WHERE date >= ?`,
      [minDate],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },
  getOthersum:  callBack => {
   
    pool.query(
      `SELECT SUM(other) AS sum FROM expence WHERE date >= ?`,
      [minDate],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        console.log(results);
        return callBack(null, results);
      }
    );
  },
};
