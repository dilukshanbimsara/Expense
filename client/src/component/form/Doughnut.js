// import {  } from "react-chartjs-2";
import React from "react";
import moment from "moment";
import Alert from "react-bootstrap/Alert";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Axios = require("axios").default;
var date = new Date();
// let month = date.getMonth() + 1;
const day = moment.utc(date).format("YYYY-MMMM");

const max = 90000;

function DoughnutChart() {
  const [food, setFood] = React.useState();
  const [medicine, setMedicine] = React.useState();
  const [other, setOther] = React.useState();
  const [subscription, setSubscription] = React.useState();
  const [transport, setTransport] = React.useState();

  React.useEffect(() => {
    async function fetchData() {
      const reqfood = await Axios.get(
        "http://localhost:3001/api/user/getFoodSum"
      );

      setFood(reqfood.data.data[0].sum);
      return reqfood;
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    async function fetchData() {
      const reqother = await Axios.get(
        "http://localhost:3001/api/user/getOtherSum"
      );

      setOther(reqother.data.data[0].sum);
      return reqother;
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    async function fetchData() {
      const reqmedicine = await Axios.get(
        "http://localhost:3001/api/user/getMedicineSum"
      );
      setMedicine(reqmedicine.data.data[0].sum);
      return reqmedicine;
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    async function fetchData() {
      const reqsub = await Axios.get(
        "http://localhost:3001/api/user/getSubscriptionSum"
      );

      setSubscription(reqsub.data.data[0].sum);

      return reqsub;
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    async function fetchData() {
      const reqtrans = await Axios.get(
        "http://localhost:3001/api/user/getTransportSum"
      );

      setTransport(reqtrans.data.data[0].sum);

      return reqtrans;
    }
    fetchData();
  }, []);

  // console.log("food : ",food)
  // console.log("other : ",subscription)

  const total = food + transport + subscription + medicine + other;

  console.log(total);

  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [food, transport, subscription, medicine, other],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          // 'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          // 'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
    labels: ["Food", "Transport", "Subscriptions", "medicine", "Other"],
  };

  return (
    <>
    <br></br>
      <h3>{day} Expense Overview</h3>
      <br></br>
      <Doughnut data={data} />
      <br></br>
      {total >= max ? (
        <Alert variant="danger">High Monthly Expense {total}!</Alert>
      ) : (
        ""
      )}
    </>
  );
}

export default DoughnutChart;
