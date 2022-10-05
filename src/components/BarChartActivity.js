import useFetchUrl from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function BarChartActivity(props) {
  const params = useParams();
  const userActivity = useFetchUrl(
    `/mock_data/user/${params.id}/activity.json`
  );
  // console.log("userActivity:", userActivity);
  const actSession = userActivity?.sessions;
  // console.log("actSession:", actSession);
  const days = actSession?.map((days) => days?.day);
  const kilo = actSession?.map((kilos) => kilos?.kilogram);
  const calories = actSession?.map((calorie) => calorie?.calories);
  // console.log("calories:", calories);

  // console.log("kilo:", kilo);
  // console.log("days:", days);
  const daysToNumber = [];
  for (let i = 0; i < actSession?.length; i++) {
    actSession[i].day = i + 1;
    daysToNumber.push(i);
  }
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

  // console.log("daysToNumber:", daysToNumber);

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
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          // width={500}
          // height={300}
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

          <Tooltip content={<CustomTooltip />} />

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

export default BarChartActivity;
