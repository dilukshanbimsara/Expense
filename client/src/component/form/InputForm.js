import React from "react";
import moment from "moment";
const axios = require("axios").default;


function InputForm() {
  var date = new Date();
  // date.getMonth();
  var date2 = new Date();
  // date.setDate(date.getDate() - 30);
  date2.setDate(date2.getDate());

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let day2 = date2.getDate();
  let month2 = date2.getMonth() + 1;
  let year2 = date2.getFullYear();

  var minDate;
  var maxDate;
  if (String(day).length === 1) {
    minDate = `${year}-${month}-01`;
    console.log("minDate : ",minDate)
  }
  if (String(day2).length === 1) {
    maxDate = `${year2}-${month2}-0${day2}`;
  }
  if (String(month).length === 1) {
    minDate = `${year}-0${month}-01`;
  }
  if (String(month2).length === 1) {
    maxDate = `${year2}-0${month2}-${day2}`;
  }

  console.log(minDate);

  //  const getValue = (event)=>{
  //     setpost(event.target.value)
  //   }

  const addExpence = (event) => {
    event.preventDefault();

    let userData = {
      date: moment.utc(event.target[0].value).format("YYYY-MM-DD"),
      food: event.target[1].value,
      transport: event.target[2].value,
      medicine: event.target[3].value,
      subscription: event.target[4].value,
      other: event.target[5].value,
      note: (event.target[6].value).replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()) ,
    };
    console.log(userData);

    axios
      .post("http://localhost:3001/api/user/add", userData)
      .then((results) => {
        console.log(results);
        window.location.reload()
      })
      .catch((err) => console.log("error is arized", err));

    // axios
    // .get("/api/user/")

    
  };

  return (
    <>
    <br></br>
    <h2>Add Expense</h2>
      <form
        className="row gy-2  align-items-center g-3 p-3 m-0"
        onSubmit={addExpence}
      >
        <div className=" ">
          <label for="date" className="form-label">
            Date
          </label>
          <input
            type="Date"
            className="form-control"
            id="date"
            name="date"
            min={String(minDate)}
            max={String(maxDate)}
            required
          />
        </div>
        <div className="col-auto">
          <label for="food" className="form-label">
            Food
          </label>
          <input
            type="number"
            min="0.00"
            
            className="form-control"
            name="food"
            placeholder="0000.00"
          />
        </div>

        <div className="col-auto">
          <label for="food" className="form-label">
            Transport
          </label>
          <input
            type="number"
            min="0.00"
            // max="5000"
            className="form-control"
            name="tranceport"
            placeholder="0000.00"
          />
        </div>
        <div className="col-auto">
          <label for="food" className="form-label">
            Medicine
          </label>
          <input
            type="number"
            min="0.00"
            // max="5000"
            className="form-control"
            name="medicine"
            placeholder="0000.00"
          />
        </div>
        <div className="col-auto">
          <label for="food" className="form-label">
            Subscriptions
          </label>
          <input
            type="number"
            min="0.00"
            // max="5000"
            className="form-control"
            name="subscription"
            placeholder="0000.00"
          />
        </div>
        <div className="col-auto">
          <label for="food" className="form-label">
            Other
          </label>
          <input
            type="number"
            min="0.00"
            // max="5000"
            className="form-control"
            name="other"
            placeholder="0000.00"
          />
        </div>
        <div className="">
          <label for="comment" className="form-label">
            Notes
          </label>
          <textarea className="form-control" rows="2" name="note" placeholder="Enter Notes Here"></textarea>
        </div>

        <div className="col-auto">
          <label className="form-label"></label>
          <button type="submit" className="btn btn-primary form-control">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default InputForm;
