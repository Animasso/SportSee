import React from "react";
import useFetchUrl from "../hooks/useFetch";
import UserCard from "../components/UserCard";
function FakeLogin(props) {
  const dataUsers = useFetchUrl("mock_data/user_data.json");
  console.log("dataUsers:", dataUsers);

  return (
    <div className="cards">
      <UserCard dataUsers={dataUsers} />
    </div>
  );
}

export default FakeLogin;
