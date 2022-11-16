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
import PropTypes from "prop-types";
import { enToFr } from "../utils/Formatted";
import { BackendURLs } from "../constantes";
/**
 * Create a bar chart with the performance data
 * @returns {JSX}
 */
function RadarPerformance() {
  const userId = useParams();
  //getting the url the correct url depending the MODE:LIVE || MOCK
  const getUrl = BackendURLs.GetUsersPerformance[process.env.REACT_APP_MODE];
  console.log("getUrl:", getUrl);
  //fetching the performance data of the user according to the userId
  const userPerformance = useFetchUrl(getUrl(userId.id));

  const userData = userPerformance?.data?.data;
  console.log("userData:", userData);

  // convert the kind value of the data into french
  const performance = userData?.map((data) => ({
    ...data,
    kind: enToFr(userPerformance?.data?.kind[data.kind]),
  }));
  console.log("performance:", performance);
  if (performance?.length > 0) {
    return (
      <div className="sessionTime-performance">
        {
          <ResponsiveContainer width="100%" height="100%">
            {
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="65%"
                data={performance}
              >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                  dataKey="kind"
                  stroke="white"
                  tickLine={false}
                  axisLine={false}
                  label={false}
                  fontSize={9}
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
}

RadarPerformance.propTypes = {
  userId: PropTypes.number,
  kind: PropTypes.shape({
    1: PropTypes.string,
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string,
    6: PropTypes.string,
  }),

  data: PropTypes.shape([
    {
      value: PropTypes.number,
      kind: PropTypes.number,
    },
  ]),
};
export default RadarPerformance;
