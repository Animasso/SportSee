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
  console.log("userPerformanceData:", userPerformance);
  const userData = userPerformance?.data;
  console.log("userData:", userData);
  const performance = userData?.map((data) => ({
    ...data,
    kind: userPerformance?.kind[data.kind],
  }));
  console.log("performance:", performance);
  const kind = userPerformance?.kind;
  console.log("kind:", kind);

  const kindUpper = [];
  for (const property in kind) {
    kindUpper.push(kind[property]);
  }
  function capitalizeWords(arr) {
    return arr.map((element) => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
  }
  const kindCap = capitalizeWords(kindUpper);
  console.log("kindCap:", kindCap);
  return (
    <div className="sessionTime-performance">
      {
        <ResponsiveContainer width="100%" height="100%">
          {
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performance}>
              <PolarGrid />
              <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" />
              <PolarRadiusAxis label={false} />
              <Radar
                name="performanceUser"
                dataKey="value"
                stroke="red"
                fill="red"
                fillOpacity={0.6}
              />
            </RadarChart>
          }
        </ResponsiveContainer>
      }
    </div>
  );
}

export default RadarPerformance;
