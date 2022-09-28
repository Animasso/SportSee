import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useFetchUrl from "../hooks/useFetch";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function SessionTimeChart(props) {
  const sessionUser = useFetchUrl("/mock_data/user_average_sessions.json");
  console.log("sessionUser:", sessionUser);
  const [averageSession, setAverageSession] = useState([]);
  // useEffect(() => {
  //   const session = sessionUser.find((user) => user.id === params.id);
  //   setAverageSession(session);
  // }, [sessionUser, averageSession, params.id]);

  const params = useParams();
  console.log("params:", params);

  //   const [averageSession, setAverageSession] = useState([]);
  useEffect(() => {
    const session = sessionUser.find((user) => user.userId === params.id);
    setAverageSession(session);
    console.log(averageSession);
  }, [averageSession, params.id, sessionUser]);

  //   const [averageSession, setAverageSession] = useState([]);
  //   useEffect(() => {
  //     const session = sessionUser.find((user) => user.userId === params.id);
  //     setAverageSession(session);
  //   }, [sessionUser, averageSession, params.id]);
  return <div></div>;
}

export default SessionTimeChart;
