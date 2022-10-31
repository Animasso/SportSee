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
import { BackendURLs } from "../constantes";
/**
 * It's a function that  returns a bar chart
 * @returns {React.ReactElement}
 */
function RadarPerformance() {
  const userId = useParams();
  console.log("userId:", userId);
  console.log(userId.id);

  //retrive the correct url depending the MODE:LIVE || MOCK
  const getUrl = BackendURLs.GetUsersPerformance[process.env.REACT_APP_MODE];
  console.log("getUrl:", getUrl);

  const userPerformance = useFetchUrl(getUrl(userId.id));
  console.log("userPerformance:", userPerformance);
  // const userPerformance = useFetchUrl(`/user/${userId.id}/performance.json`);
  const userData = userPerformance?.data;
  console.log("userData:", userData);

  const kind = userPerformance?.kind;
  console.log("kind:", kind);

  /**
   *
   * @param {string} str
   * @returns translation from english to french
   */
  function enToFr(str) {
    switch (str) {
      case "energy":
        return "Energie";
      case "strength":
        return "Force";
      case "speed":
        return "Vitesse";
      case "intensity":
        return "Intensité";
      case "cardio":
        return "Cardio";
      case "endurance":
        return "Endurance";
      default:
        return;
    }
  }
  /**
   * @return {{id:number, data: string}} all the data proprely tranform
   */
  const performance = userData?.map((data) => ({
    ...data,
    kind: enToFr(userPerformance?.kind[data.kind]),
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
                <PolarGrid />
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
