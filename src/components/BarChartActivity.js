import useFetchUrl from "../hooks/useFetch";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function BarChartActivity(props) {
  const params = useParams();
  const userActivity = useFetchUrl("/mock_data/user_activity.json");
  console.log("userPerformance:", userActivity);
  return <div></div>;
}

export default BarChartActivity;
