import React from "react";
import Form from "./component/form/InputForm";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import DoughnutChart from "./component/form/Doughnut";
import HistTable from "./component/HistTable";
// import EditTable from "./component/table/EditTable";
// import PieChart from "./component/Chart/Piechart";

function App() {
  return (
    <div className="container-fluid text-center ">
      <div className="row app-title shadow">
        {" "}
        <h1>My Wallet</h1>
      </div>
      <div className="row">
        <div className="col-md-4 ">
          {" "}
          <div className="shadow">
            <DoughnutChart />
          </div>{" "}
        </div>
        <div className="col-md-8 ">
          <div className="shadow">
            <Form></Form>
          </div>
        </div>
      </div>
<br></br>
      <div className="row">
        <div className="col-md-12 ">
          <div className="shadow m-hight">
            <HistTable></HistTable>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
