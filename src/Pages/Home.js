import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import SessionTimeChart from "../components/SessionTImeChart";
import UserName from "../components/UserName";
import RadarPerformance from "../components/RadarPerformance";
import BarChartActivity from "../components/BarChartActivity";
import PieChartActivity from "../components/PieChartActivity";

function Home(props) {
  return (
    <>
      <NavBar />
      <SideBar />
      <UserName />
      <BarChartActivity />
      <div className="cardChart">
        <SessionTimeChart />
        <RadarPerformance />
        <PieChartActivity />
      </div>
    </>
  );
}

export default Home;
