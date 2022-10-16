import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import useFetchUrl from "../hooks/useFetch";
import { useParams } from "react-router-dom";

function PieChartActivity(props) {
  const params = useParams();
  const userDataScore = useFetchUrl(`/mock_data/user/${params.id}/data.json`);

  const score = [
    { value: userDataScore.todayScore * 100 || userDataScore.score * 100 },
    {
      value: 100 - userDataScore.todayScore * 100 || userDataScore.score * 100,
    },
  ];
  console.log("score:", score);

  console.log("userDataScore:", userDataScore);

  return (
    <div className="pie-activity">
      {
        <>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={score}
                dataKey="value"
                innerRadius={70}
                outerRadius={80}
                startAngle={90}
              >
                {score.map((entry, index) =>
                  index === 0 ? (
                    <Cell
                      key={`cell-${index}`}
                      cornerRadius={10}
                      fill="#ff0000 "
                    />
                  ) : (
                    <Cell key={`cell-${entry}`} fill="#FBFBFB" />
                  )
                )}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="score">
            <span className="num-score">{score[0].value}%</span> <br />
            de votre
            <br /> objectif
          </div>
        </>
      }
    </div>
  );
}

export default PieChartActivity;
