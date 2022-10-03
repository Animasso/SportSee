import React from "react";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import useFetchUrl from "../hooks/useFetch";
import { useParams } from "react-router-dom";
function RadarPerformance(props) {
  const params = useParams();
  const userPerformance = useFetchUrl(
    `/mock_data/user/${params.id}/performance.json`
  );
  console.log("userPerformanceData:", userPerformance?.data);
  return (
    <div className="sessionTime-activity">
      {
        // <ResponsiveContainer width="100%" height="100%">
        //   {
        //     <RadarChart
        //       cx="50%"
        //       cy="50%"
        //       outerRadius="80%"
        //       data={userPerformance}
        //     >
        //       <PolarGrid />
        //       <PolarAngleAxis dataKey={userPerformance?.kind} />
        //       <PolarRadiusAxis />
        //       <Radar
        //         name="performanceUser"
        //         dataKey={userPerformance?.data}
        //         stroke="#8884d8"
        //         fill="#8884d8"
        //         fillOpacity={0.6}
        //       />
        //     </RadarChart>
        //   }
        // </ResponsiveContainer>
      }
    </div>
  );
}

export default RadarPerformance;
