import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import useFetchUrl from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { BackendURLs } from "../constantes";

/**
 * 
 *  
   
 * @returns {React.ReactElement}
 */

function PieChartActivity(props) {
  const userId = useParams();
  const getUrl = BackendURLs.GetUserData[process.env.REACT_APP_MODE];
  console.log("getUrl:", getUrl);
  const userDataScore = useFetchUrl(getUrl(userId.id));
  console.log("userDataScore:", userDataScore);
  // const userDataScore = useFetchUrl(`/user/${userId.id}/data.json`);

  // convert the todayScore or score into a pourcentaage
  const score = [
    {
      value:
        userDataScore.data?.todayScore * 100 || userDataScore.data?.score * 100,
    },
    {
      value:
        100 - userDataScore.data?.todayScore * 100 ||
        userDataScore.data?.score * 100,
    },
  ];
  console.log("score:", score);

  // console.log("userDataScore:", userDataScore);
  if (score?.length > 0) {
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
                        fill="#ff0000"
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
}
PieChartActivity.propTypes = {
  userId: PropTypes.number,
  userInfos: PropTypes.shape({
    firstName: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    lastname: PropTypes.number,
    day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  score: PropTypes.number,
  keyData: PropTypes.shape({
    calorieCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
  }),
};
export default PieChartActivity;
