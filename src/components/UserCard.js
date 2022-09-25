import { useNavigate } from "react-router-dom";
function UserCard(props) {
  const { dataUsers } = props;
  let navigate = useNavigate();
  return (
    <>
      {dataUsers.map((user) => (
        <div
          className="username-info"
          key={user.id}
          onClick={() => {
            navigate(`/user/${user.id}`);
          }}
        >
          <p className="Name">{user.userInfos.firstName}</p>
          <p className="Last">{user.userInfos.lastName}</p>
          <p className="Age">{user.userInfos.age}</p>
        </div>
      ))}
    </>
  );
}

export default UserCard;
