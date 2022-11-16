import { useParams } from "react-router-dom";
import useFetchUrl from "../hooks/useFetch";
import iconCalories from "../assets/calories-icon.png";
import iconCarbs from "../assets/carbs-icon.png";
import iconFat from "../assets/fat-icon.png";
import iconProtein from "../assets/protein-icon.png";
import IconCard from "./IconCard";

function UserName() {
  const params = useParams();
  const userDataInfo = useFetchUrl(`/user/${params.id}/data.json`);

  return (
    <>
      <div className="username">
        <h1>
          Bonjour{" "}
          <span className="first-name">
            {userDataInfo?.data?.userInfos?.firstName}
          </span>
        </h1>
        <p className="congrat">
          Félicitation ! Vous avez explosé vos objectifs hier👏
        </p>
        <div className="user-infos">
          <IconCard
            icon={iconCalories}
            dataCount={userDataInfo?.data?.keyData?.calorieCount}
            nutrition="Calories "
          />
          <IconCard
            icon={iconProtein}
            dataCount={userDataInfo?.data?.keyData?.proteinCount}
            nutrition="Proteines"
          />
          <IconCard
            icon={iconCarbs}
            dataCount={userDataInfo?.data?.keyData?.carbohydrateCount}
            nutrition="Glucides"
          />
          <IconCard
            icon={iconFat}
            dataCount={userDataInfo?.data?.keyData?.lipidCount}
            nutrition="Lipides"
          />
        </div>
      </div>
    </>
  );
}

export default UserName;
