import React from "react";
import useFetchUrl from "../hooks/useFetch";
import UserCard from "../components/UserCard";
import NavBarFakelogin from "../components/NavBarFakelogin";
function FakeLogin(props) {
  const { dataUsers } = props;
  return (
    <>
      <NavBarFakelogin />
      <div className="cards">
        <UserCard dataUsers={dataUsers} />
      </div>
    </>
  );
}

export default FakeLogin;
