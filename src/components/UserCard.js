import { useNavigate } from "react-router-dom";
import maleAvatar from "../assets/avatarHomme.jpg";
import femaleAvatar from "../assets/avatarFemme.jpg";
/**
 *
 * @param {*} props
 * @returns
 */
function UserCard(props) {
  const { dataUsers } = props;
  let navigate = useNavigate();

  return (
    <>
      {dataUsers.map((user, index) => (
        <div className="block" key={index}>
          <div
            className="userCard"
            onClick={() => {
              navigate(`/user/${user.id}`);
            }}
          >
            <div className="avatar">
              <img
                src={user.id === 12 ? maleAvatar : femaleAvatar}
                className="userAvatar"
                alt=""
              />
            </div>
            <div className="username-info">
              <p className="name">
                {user.userInfos.firstName} {user.userInfos.lastName}
              </p>
              <p className="Age">{user.userInfos.age} ans</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default UserCard;
