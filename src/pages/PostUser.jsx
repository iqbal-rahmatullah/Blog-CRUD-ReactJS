import React from "react";
import Navigations from "../components/Navigations";
import axios from "axios";
import { useState, useEffect } from "react";

function PostUser() {
  const [allUser, setAllUser] = useState([{}]);

  const postData = () => {
    axios
      .post(
        "https://reqres.in/api/users",
        {
          avatar:
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
          first_name: "Iqbal",
          last_name: "Rahmatullah",
          email: "iqbalrahmatullah@bal.com",
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((value) => setAllUser((prev) => [...prev, value.data]))
      .catch((err) => console.log(err));
  };

  const getUser = () => {
    axios
      .get("https://reqres.in/api/users?page=1&per_page=12")
      .then((user) => setAllUser(user.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Navigations />
      <hr />
      <h1>Post Data</h1>
      <button onClick={() => postData()}>Post Data</button>
      {allUser.map((user) => (
        <ul>
          <img
            style={{
              width: "100px",
            }}
            src={user.avatar}
            alt='Profile Img'
          />
          <li>
            Nama : {user.first_name} {user.last_name}
          </li>
          <li>Email : {user.email}</li>
        </ul>
      ))}
    </div>
  );
}

export default PostUser;
