import { useParams } from "react-router-dom";
import useFetchUrl from "../hooks/useFetch";
import iconCalories from "../assets/calories-icon.png";
import iconCarbs from "../assets/carbs-icon.png";
import iconFat from "../assets/fat-icon.png";
import iconProtein from "../assets/protein-icon.png";

function UserName(props) {
  //   const { dataUsers } = props;
  const params = useParams();
  const userDataInfo = useFetchUrl(`/user/${params.id}/data.json`);
  console.log("userDataInfo:", userDataInfo);

  return (
    <>
      <div className="username">
        <h1>
          Bonjour{" "}
          <span className="first-name">
            {userDataInfo?.userInfos?.firstName}
          </span>
        </h1>
        <p className="congrat">
          Félicitation ! Vous avez explosé vos objectifs hier👏
        </p>
        <div className="user-infos">
          <div className="infos">
            <div className="icon">
              <img src={iconCalories} alt="" />
              <div className="exp">
                <div className="substrats-number">
                  {userDataInfo?.keyData?.calorieCount}kCal
                </div>
                <div className="substrats">Calories</div>
              </div>
            </div>
          </div>
          <div className="infos">
            <div className="infos">
              <div className="icon">
                <img src={iconProtein} alt="" />
                <div className="exp">
                  <div className="substrats-number">
                    {userDataInfo?.keyData?.proteinCount}g
                  </div>
                  <div className="substrats">Proteines</div>
                </div>
              </div>
            </div>
          </div>
          <div className="infos">
            <div className="infos">
              <div className="icon">
                <img src={iconCarbs} alt="" />
                <div className="exp">
                  <div className="substrats-number">
                    {userDataInfo?.keyData?.carbohydrateCount}g
                  </div>
                  <div className="substrats">Glucides</div>
                </div>
              </div>
            </div>
          </div>
          <div className="infos">
            <div className="infos">
              <div className="icon">
                <img src={iconFat} alt="" />
                <div className="exp">
                  <div className="substrats-number">
                    {userDataInfo?.keyData?.lipidCount}g
                  </div>
                  <div className="substrats">Lipides</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserName;
