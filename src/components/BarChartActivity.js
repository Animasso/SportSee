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
  // console.log("daysToNumber:", daysToNumber);

  return (
    <div className="barChart-activity">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={actSession}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis dataKey="kilogram" />

          <Tooltip />
          <Legend />

          <Bar
            dataKey="kilogram"
            barSize={10}
            radius={[5, 5, 0, 0]}
            fill="black"
          />
          <Bar
            dataKey="calories"
            barSize={10}
            radius={[5, 5, 0, 0]}
            fill="red"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartActivity;
