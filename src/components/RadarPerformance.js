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
function RadarPerformance() {
  const params = useParams();

  /** fetch the data including the performance of the user
   * @type {{userId: number,kind:{key:number},data: [{value:number, kind:number}]}}
   * @return a promesse
   */

  const userPerformance = useFetchUrl(
    `/mock_data/user/${params.id}/performance.json`
  );
  // console.log("userPerformanceData:", userPerformance);
  const userData = userPerformance?.data;
  const kind = userPerformance?.kind;
  // console.log("kind:", kind);
  const kindUpper = [];
  for (const property in kind) {
    kindUpper.push(kind[property]);
  }
  /**
   *
   * @param {array} arr array of string
   * @returns
   */

  //function to change the first letter of each string of an array
  function capitalizeWords(arr) {
    return arr.map((element) => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
  }

  const kindCap = capitalizeWords(kindUpper);
  console.log("kindCap:", kindCap);
  console.log("userData:", userData);

  const performance = userData?.map((data) => ({
    ...data,
    kind: userPerformance?.kind[data.kind],
  }));

  console.log("performance:", performance);
  console.log("kindCap:", kindCap);
  return (
    <div className="sessionTime-performance">
      {
        <ResponsiveContainer width="100%" height="100%">
          {
            <RadarChart cx="50%" cy="50%" outerRadius="65%" data={performance}>
              <PolarGrid />
              <PolarAngleAxis
                dataKey="kind"
                stroke="white"
                tickLine={false}
                axisLine={false}
                label={false}
                fontSize={12}
              />
              <PolarRadiusAxis axisLine={false} tick={false} label={false} />
              <Radar
                dataKey="value"
                stroke="red"
                fill="red"
                fillOpacity={0.6}
                label={false}
              />
            </RadarChart>
          }
        </ResponsiveContainer>
      }
    </div>
  );
}

export default RadarPerformance;
