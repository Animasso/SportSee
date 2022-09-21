// import axios from "axios";
import { useState, useEffect } from "react";

function UserFetch(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const pathUsers = "../mock_data/user_data";
    fetch(pathUsers)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  return users;
}
export default UserFetch;
