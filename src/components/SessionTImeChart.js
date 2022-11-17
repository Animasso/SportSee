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
import { Rectangle } from "recharts";
import PropTypes from "prop-types";
import { numberToLetter } from "../utils/Formatted";
// import {numberToLetter} from "../utils/Formatted"
function SessionTimeChart() {
  const userId = useParams();
  /**  Render a LineChart with user session Data
   * @return {JSX}
   */

  //getting the url the correct url depending the MODE:LIVE || MOCK
  const getUrl = BackendURLs.GetUsersAverageSession[process.env.REACT_APP_MODE];
  console.log("getUrl:", getUrl);
  //fetching the average session data of the user according to the userId
  const sessionsAverage = useFetchUrl(getUrl(userId.id));

  const average = sessionsAverage?.data?.sessions;

  //function to convert the day into a letter of the week
  const daySession = numberToLetter(average);

  /**
   * Customisation of the tooltip
   * @prop {Boolean} active is the component is active or not? (mouse over)
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
  /**
   * Changing color with the position of the cursor
   * @prop {number} width
   * @prop {number} points
   */
  const CustomCursor = (props) => {
    const { width, points } = props;
    const X = points[0].x;
    const Y = points[0].y;
    const sum = width - X;
    return (
      <Rectangle
        width={sum}
        height={263}
        x={X}
        y={Y}
        style={{ background: "red", opacity: 0.1 }}
      />
    );
  };
  if (average?.length > 0) {
    return (
      <div className="sessionTime-activity">
        <h1 className="activity">Durée moyenne des sessions</h1>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={daySession}>
            <CartesianGrid horizontal="" vertical="" />
            <XAxis
              dataKey="day"
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
              cursor={<CustomCursor />}
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
