import React from "react";
import Navbar from "../components/Navbar";
import Chart from "../components/Chart";
import Balance from "../components/Balance";
import Transactions from "../components/Transactions";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="px-20 mt-20 ">
        <div className="flex justify-between">
          <Chart />
          <Balance />
        </div>
        <Transactions />
      </div>
    </div>
  );
};

export default Home;
