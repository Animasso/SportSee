import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
function UserName(props) {
  const { dataUsers } = props;
  const params = useParams();

  const [name, setName] = useState([]);
  useEffect(() => {
    const nameUser = dataUsers.find((user) => user.id === params.id);
    setName(nameUser);
  }, [name, params.id, dataUsers]);
  return (
    <>
      {/* <div className="user-name">
        <h1>Bonjour</h1>
        <div className="firstLast-name">
          {nameUser.userInfos.firstName} {nameUser.userInfos.lastName}
        </div>
      </div> */}
    </>
  );
}

export default UserName;
