import React from "react";
import useFetchUrl from "../hooks/useFetch";
import { useParams } from "react-router-dom";
function RadarPerformance(props) {
  const params = useParams();
  const userPerformance = useFetchUrl(
    `/mock_data/user/${params.id}/performance.json`
  );
  console.log("userPerformance:", userPerformance);
  return <div></div>;
}

export default RadarPerformance;
