import React from "react";
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";
import useFetchUrl from "../hooks/useFetch";
import { useParams } from "react-router-dom";

function PieChartActivity(props) {
  const params = useParams();
  const userDataScore = useFetchUrl(`/mock_data/user/${params.id}/data.json`);
  const score = userDataScore?.todayScore * 100 || userDataScore?.score * 100;
  console.log("score:", score);

  return (
    <div className="pie-activity">
      {<ResponsiveContainer></ResponsiveContainer>}
      {/* { <PieChart width={800} height={400}>
        <Pie
          data={score}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        ></Pie>
      </PieChart> } */}
    </div>
  );
}

export default PieChartActivity;
