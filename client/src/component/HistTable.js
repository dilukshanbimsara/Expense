import React from "react";
import Table from "react-bootstrap/Table";
import moment from "moment";
import { BsFillTrashFill } from "react-icons/bs";

const Axios = require("axios").default;
var date = new Date();
// let month = date.getMonth() + 1;
const day = moment.utc(date).format("YYYY-MMMM");
// alert(day);


function HistTable() {
  const [post, setPost] = React.useState();

  function setData(response) {
    setPost(response.data.data);
  }

  function deleteRow(event) {
    event.preventDefault();
    console.log("delet row : ",event)
    let userData = {
      date: moment.utc(event.target[0].value).format("YYYY-MM-DD"),
      // date:"2022-08-09",
    };
    console.log(userData);

    Axios
      .post("http://localhost:3001/api/user/delete", userData)
      .then((results) => {
        console.log("delete complete ", results);
        window.location.reload()

      })
      .catch((err) => console.log("error is arized", err));
  }

  React.useEffect(() => {
    async function fetchData() {
      const request = await Axios.get("http://localhost:3001/api/user/");
      console.log("request ::", request);
      setPost(request.data.data);
      return request;
    }
    fetchData();
  }, []);
  console.log("post data : ", post);

  if (!post) return null;

  return (
    <>
    <br></br>
      <h2>{day} Expense</h2>
      <br></br>
      <Table responsive="sm" className="">
        <thead>
          <tr>
            <th></th>
            <th style={{backgroundColor:"rgba(255, 99, 132, 0.2)"}}>Food</th>
            <th style={{backgroundColor:"rgba(54, 162, 235, 0.2)"}}>Transport</th>
            <th style={{backgroundColor:"rgba(255, 206, 86, 0.2)"}}>Medicine</th>
            <th style={{backgroundColor:"rgba(75, 192, 192, 0.2)"}}>Subscriptions</th>
            <th style={{backgroundColor:"rgba(153, 102, 255, 0.2)"}}>Other</th>
            <th style={{backgroundColor:"rgba(100, 180, 0, 0.2)"}}>Notes</th>
          </tr>
        </thead>
        <tbody>
          {post.map((item, i) => {
            return (
              <>
              <tr key={i}>
                <td>{moment.utc(item.date).format("YYYY-MM-DD")}</td>
                <td>{item.food}</td>
                <td>{item.transport}</td>
                <td>{item.medicine}</td>
                <td>{item.subscription}</td>
                <td>{item.other}</td>
                <td>{item.note}</td>
                <td>
                  <form
                    onSubmit={deleteRow}
                  >
                     <input type="hidden" id="custId" name="custId" value={item.date} ></input>
                    <button type="submit" style={{backgroundColor:"white" , border:"none"}}><BsFillTrashFill /></button>

                  </form>
                </td>
              
              
              </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default HistTable;
