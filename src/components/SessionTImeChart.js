import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useFetchUrl from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { BackendURLs } from "../constantes";
import PropTypes from "prop-types";
function SessionTimeChart() {
  const userId = useParams();

  /** fetch the data including the time of an average session of the user
   * @type {{userId: number,sessions:[{day:number|"string",sessionLength: number}]}}
   * @returns {Promise}
   */
  const getUrl = BackendURLs.GetUsersAverageSession[process.env.REACT_APP_MODE];
  console.log("getUrl:", getUrl);
  const sessionsAverage = useFetchUrl(getUrl(userId.id));
  // const sessionsAverage = useFetchUrl(
  //   `/user/${params.id}/average-sessions.json`
  // );
  const average = sessionsAverage?.sessions;

  //function to convert the day into a letter of the week
  const daySession = average?.map((data) => {
    switch (data.day) {
      case 1:
        return { ...data, day: "L" };
      case 2:
        return { ...data, day: "M" };
      case 3:
        return { ...data, day: "M" };
      case 4:
        return { ...data, day: "J" };
      case 5:
        return { ...data, day: "V" };
      case 6:
        return { ...data, day: "S" };
      case 7:
        return { ...data, day: "D" };
      default:
        return { ...data };
    }
  });
  /**
   * @prop {Boolean} active whether the component is active or not (mouse over)
   * @prop {ArrayOfObject} payload Properties of each componant Bar
   */

  const CustomTooltipTime = ({ active, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip-time">
          <p className="label-time">{payload[0].value}min</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="sessionTime-activity">
      <h1 className="activity">Durée moyenne des sessions</h1>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={daySession}>
          <CartesianGrid horizontal="" vertical="" />
          <XAxis
            type="category"
            dataKey="day"
            tickLine={true}
            stroke=""
            padding={{ right: 5, left: 5 }}
            tick={{ fontSize: 13, stroke: "white", opacity: 0.8 }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip
            content={<CustomTooltipTime />}
            wrapperStyle={{ outline: "none" }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ stroke: "white", r: 4, strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
SessionTimeChart.propTypes = {
  userId: PropTypes.number,
  sessions: PropTypes.shape([
    {
      day: PropTypes.number,
      sessionLength: PropTypes.number,
    },
  ]),
};
export default SessionTimeChart;
