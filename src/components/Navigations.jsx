import React from "react";
import { Link } from "react-router-dom";
import "./Navigations.css";

function Navigations() {
  return (
    <nav>
      <h1>React Blog</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/add_blog'>
            <button>Add Blog</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigations;
