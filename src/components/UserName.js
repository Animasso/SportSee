import { useParams } from "react-router-dom";
import useFetchUrl from "../hooks/useFetch";

function UserName(props) {
  //   const { dataUsers } = props;
  const params = useParams();
  const userDataInfo = useFetchUrl(`/mock_data/user/${params.id}/data.json`);
  console.log("userDataInfo:", userDataInfo);

  return (
    <>
      <div className="user-name">
        <h1>Bonjour</h1>
        <div className="firstname">
          {console.log(userDataInfo.userInfos.firstName)}
        </div>
      </div>
    </>
  );
}

export default UserName;
