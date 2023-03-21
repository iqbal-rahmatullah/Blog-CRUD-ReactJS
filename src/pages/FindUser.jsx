import React from "react";
import Navigations from "../components/Navigations";
import axios from "axios";
import { useState, useEffect } from "react";

function FindUser() {
  const [findData, setFindData] = useState(1);
  const [hasilCari, setHasilCari] = useState([]);

  const cariuser = () => {
    axios
      .get(`https://reqres.in/api/users/${findData}`)
      .then((res) => setHasilCari(res.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    cariuser();
  }, [findData]);

  return (
    <div>
      <Navigations />
      <hr />
      <h1>Find User</h1>
      <input
        type='text'
        style={{
          width: "300px",
          padding: "5px",
        }}
        onChange={(e) => setFindData(e.target.value)}
        placeholder='Input ID'
      />
      <ul>
        <img src={hasilCari.avatar} alt='Profile' />
        <li>
          {hasilCari.first_name} {hasilCari.last_name}
        </li>
        <li>{hasilCari.email}</li>
      </ul>
    </div>
  );
}

export default FindUser;
