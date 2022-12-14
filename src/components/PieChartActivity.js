import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import useFetchUrl from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { BackendURLs } from "../constantes";
import { formatettedScore } from "../utils/Formatted";

/**
 * create a PieChart with score value
 * @returns {React.ReactElement}
 */
function PieChartActivity() {
  const userId = useParams();
  //getting the url the correct url depending the MODE:LIVE || MOCK
  const getUrl = BackendURLs.GetUserData[process.env.REACT_APP_MODE];
  console.log("getUrl:", getUrl);
  const userDataScore = useFetchUrl(getUrl(userId.id));

  const userScore =
    userDataScore?.data?.score || userDataScore?.data?.todayScore;

  // the todayScore or score into a pourcentaage
  const score = formatettedScore(userScore);
  return (
    <div className="pie-activity">
      {
        <>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={score}
                dataKey="value"
                innerRadius={70}
                outerRadius={80}
                startAngle={90}
                endAngle={450}
              >
                {score.map((entry, index) =>
                  index === 0 ? (
                    <Cell
                      key={`cell-${index}`}
                      cornerRadius={10}
                      fill="#ff0000"
                    />
                  ) : (
                    <Cell key={`cell-${index}`} fill="#FFFFFF" />
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
