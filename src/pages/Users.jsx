import React from "react";
import Navigations from "../components/Navigations";
import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  const [allUser, setAllUser] = useState([{}]);

  const getUser = () => {
    axios
      .get("https://reqres.in/api/users?page=1&per_page=12")
      .then((user) => setAllUser(user.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(allUser);

  return (
    <div>
      <Navigations />
      <hr />
      <h1>All User</h1>

      {allUser.map((user) => (
        <ul>
          <img src={user.avatar} alt='Profile Img' />
          <li>
            Nama : {user.first_name} {user.last_name}
          </li>
          <li>Email : {user.email}</li>
        </ul>
      ))}
    </div>
  );
}

export default Users;
