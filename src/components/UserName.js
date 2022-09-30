import { useParams } from "react-router-dom";
import useFetchUrl from "../hooks/useFetch";
import iconCalories from "../assets/calories-icon.png";
import iconCarbs from "../assets/carbs-icon.png";
import iconFat from "../assets/fat-icon.png";
import iconProtein from "../assets/protein-icon.png";

function UserName(props) {
  //   const { dataUsers } = props;
  const params = useParams();
  const userDataInfo = useFetchUrl(`/mock_data/user/${params.id}/data.json`);
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
                <div className="numberExp">
                  {userDataInfo?.keyData?.calorieCount}
                </div>
                <div className="calories">Calories</div>
              </div>
            </div>
          </div>
          <div className="infos"></div>
          <div className="infos"></div>
          <div className="infos"></div>
        </div>
      </div>
    </>
  );
}

export default UserName;
