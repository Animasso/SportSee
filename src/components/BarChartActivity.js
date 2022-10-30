import useFetchUrl from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BackendURLs } from "../constantes";
function BarChartActivity() {
  //get the userId
  const userId = useParams();

  /** fetch the data including the activity of the user
   * @type {{userId: number,sessions:{Array.<{day:number|string, kilogram:number,calories:number}>}}}
   *@returns {Promise}
   */
  // const userActivity = useFetchUrl(`/user/${params.id}/activity.json`);
  // const userActivity = useFetchUrl(`/user/${params.id}/activity.json`);

  const getUrl = BackendURLs.GetUsersActivity[process.env.REACT_APP_MODE];
  console.log("getUrl:", getUrl);
  const userActivity = useFetchUrl(getUrl(userId.id));
  console.log("userActivity:", userActivity);
  //faire une condition if else  avec le live et le mock
  const actSession = userActivity?.sessions;
  console.log("actSession:", actSession);

  //loop to convert days into one number from 1 to 7
  for (let i = 0; i < actSession?.length; i++) {
    actSession[i].day = i + 1;
  }
  /**
   * @prop {Boolean} active whether the component is active or not (mouse over)
   * @prop {ArrayOfObject} payload Properties of each componant Bar
   */

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{payload[0].value}kg</p>
          <p className="intro">{payload[1].value}Kcal</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="barChart-activity">
      <header>
        <div className="daily-activity">Activité quotidienne</div>
        <div className="round">
          <div className=" color">
            <div className="blackr"></div>
            <p>Poids (kg)</p>
          </div>

          <div className=" colorRR">
            <div className="redr"></div>
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </header>
      <ResponsiveContainer height={200}>
        <BarChart
          // width={500}

          barGap={8}
          barCategoryGap={1}
          data={actSession}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="day"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dy={15}
            stroke="1 1"
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            domain={["dataMin - 2", "dataMax + 1"]}
            tickCount="4"
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dx={15}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            domain={["dataMin - 20", "dataMax + 10"]}
            hide={true}
          />

          <Tooltip
            viewBox={{ x: 0, y: 0, width: 39, height: 25 }}
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
          />

          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            barSize={8}
            radius={[5, 5, 0, 0]}
            fill="black"
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            barSize={8}
            radius={[5, 5, 0, 0]}
            fill="red"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

BarChartActivity.propTypes = {
  userId: PropTypes.number,
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
};
export default BarChartActivity;
