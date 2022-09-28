import React from "react";
import useFetchUrl from "../hooks/useFetch";
function RadarPerformance(props) {
  const userPerformance = useFetchUrl("/mock_data/user_performance.json");
  console.log("userPerformance:", userPerformance);
  return <div></div>;
}

export default RadarPerformance;
