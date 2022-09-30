import { useParams } from "react-router-dom";
import useFetchUrl from "../hooks/useFetch";

function UserName(props) {
  //   const { dataUsers } = props;
  const params = useParams();
  const userDataInfo = useFetchUrl(`/mock_data/user/${params.id}/data.json`);
  console.log("userDataInfo:", userDataInfo);

  return (
    <>
      <div className="username">
        <h1>Bonjour</h1>
        <pre>{JSON.stringify(userDataInfo)}</pre>
        <div className="firstname">{userDataInfo?.userInfos?.firstName}</div>
      </div>
    </>
  );
}

export default UserName;
