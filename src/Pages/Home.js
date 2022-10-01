import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import useFetchUrl from "../hooks/useFetch";
import SessionTimeChart from "../components/SessionTImeChart";
import UserName from "../components/UserName";
import RadarPerformance from "../components/RadarPerformance";
import BarChartActivity from "../components/BarChartActivity";
// import { useParams } from "react-router-dom";

function Home(props) {
  // const { dataUsers } = props;
  // const params = useParams();
  // const userData = dataUsers.find((user) => user.id === params.id);
  // console.log("userData:", userData);

  return (
    <>
      <NavBar />
      <SideBar />
      <UserName />
      <BarChartActivity />
      <div className="cardChart">
        <SessionTimeChart />
        <RadarPerformance />
      </div>
    </>
  );
}

export default Home;
