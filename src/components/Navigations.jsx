import React from "react";
import { Link } from "react-router-dom";
import "./Navigations.css";

function Navigations() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>User</Link>
        </li>
        <li>
          <Link to='/finduser'>Find User</Link>
        </li>
        <li>
          <Link to='/postuser'>Post User</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigations;
