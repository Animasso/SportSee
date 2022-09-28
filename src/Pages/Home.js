import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchUrl from "../hooks/useFetch";
import SessionTimeChart from "../components/SessionTImeChart";
import UserName from "../components/UserName";
import RadarPerformance from "../components/RadarPerformance";
import BarChartActivity from "../components/BarChartActivity";
//importer useparams et faire la correspondance avec les données du user avec une constante  et faire passer cet constante en tant que props dans  session chart
function Home(props) {
  const { dataUsers } = props;
  // const params = useParams();
  // const [averageSession, setAverageSession] = useState([]);
  // useEffect(() => {
  //   const session = sessionUser.find((user) => user.id === params.id);
  //   setAverageSession(session);
  // }, [sessionUser, averageSession, params.id]);
  // const sessionUser = useFetchUrl("/mock_data/user_average_sessions.json");
  // console.log("sessionUser:", sessionUser);
  // const params = useParams();
  //   const [averageSession, setAverageSession] = useState([]);
  // useEffect(() => {
  //   const session = sessionUser.find((user) => user.userId === params.id);
  //   setAverageSession(session);
  // }, []);
  // const sessionUser = useFetchUrl("/mock_data/user_average_sessions.json");
  // console.log("sessionUser:", sessionUser);
  // au moment ou j arrive sur la page de fait en sort d avoir les info que du sur avec l id correspondant
  return (
    <>
      <NavBar />
      <SideBar />
      <UserName dataUsers={dataUsers} />
      <SessionTimeChart />
      <RadarPerformance />
      <BarChartActivity />
    </>
  );
}

export default Home;
