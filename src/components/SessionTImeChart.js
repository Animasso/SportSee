import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useFetchUrl from "../hooks/useFetch";

import { useParams } from "react-router-dom";
// import { useEffect } from "react";

function SessionTimeChart(props) {
  const params = useParams();
  const sessionsAverage = useFetchUrl(
    `/mock_data/user/${params.id}/average-sessions.json`
  );
  // console.log("sessionsAverage:", sessionsAverage);

  return (
    <div className="sessionTime-activity">
      <h1 className="activity">Durée moyenne des sessions</h1>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sessionsAverage?.sessions}>
          <CartesianGrid horizontal="" vertical="" />
          <XAxis
            type="category"
            dataKey="day"
            tickLine={true}
            stroke=""
            padding={{ right: 5, left: 5 }}
            tick={{ fontSize: 13, stroke: "white", opacity: 0.8 }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#ffffff", color: "#000000" }}
            itemStyle={{ color: "#000000" }}
            cursor={false}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ stroke: "white", r: 4, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SessionTimeChart;
