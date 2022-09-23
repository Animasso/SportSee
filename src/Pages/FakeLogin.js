import React from "react";
// import UserFetchApi from "../hooks/UserFetchApi";
import UserCard from "../components/UserCard";

function FakeLogin(props) {
  const { user12 } = props;

  //   const userInfos18 = UserFetchApi(18);
  return (
    <div className="cards">
      <UserCard user12={user12} />
      {/* <UserCard user18={userInfos18} /> */}
    </div>
  );
}

export default FakeLogin;
