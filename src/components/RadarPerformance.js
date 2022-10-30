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
function RadarPerformance() {
  const userId = useParams();
  console.log("userId:", userId);
  console.log(userId.id);
  // /** fetch the data including the performance of the user
  //  * @type {{userId: number,kind:{key:number},data: [{value:number, kind:number}]}}
  //  * @returns {Promise}
  //  */
  const getUrl = BackendURLs.GetUsersPerformance[process.env.REACT_APP_MODE];
  console.log("getUrl:", getUrl);
  const userPerformance = useFetchUrl(getUrl(userId.id));
  console.log("userPerformance:", userPerformance);

  // const userPerformance = useFetchUrl(`/user/${userId.id}/performance.json`);

  const userData = userPerformance?.data;
  console.log("userData:", userData);

  const kind = userPerformance?.kind;
  console.log("kind:", kind);
  // const kindUpper = [];
  // for (const property in kind) {
  //   kindUpper.push(kind[property]);
  // }
  // /**
  //  *
  //  * @param {array} arr array of strings
  //  * @returns []
  //  */

  //function to change the first letter of each string of an array
  function capitalize(title) {
    return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  }

  const performance = userData?.map((data) => ({
    ...data,
    kind: capitalize(userPerformance?.kind[data.kind]),
  }));

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
