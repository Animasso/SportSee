import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import useFetchUrl from "../hooks/useFetch";
import { useParams } from "react-router-dom";

function PieChartActivity(props) {
  const params = useParams();
  const userDataId = useFetchUrl(`/mock_data/user/${params.id}/data.json`);
  //   console.log("userDataId:", userDataId);
  const score = userDataId?.todayScore || userDataId?.score;
  //   console.log("score:", score);
  const COLORS = ["#FF8042"];
  return (
    <div className="pie-activity">
      {/*
      <PieChart width={800} height={400}>
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
      </PieChart> */}
    </div>
  );
}

export default PieChartActivity;
