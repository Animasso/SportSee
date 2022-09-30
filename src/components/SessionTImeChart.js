import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
import useFetchUrl from "../hooks/useFetch";
// import { useEffect } from "react";
// import { useState } from "react";
import { useParams } from "react-router-dom";

function SessionTimeChart(props) {
  const params = useParams();
  const sessionsAverage = useFetchUrl(
    `/mock_data/user/${params.id}/average-sessions.json`
  );
  console.log("sessionsAverage:", sessionsAverage);

  return <div className="session-time-chart"></div>;
}

export default SessionTimeChart;
