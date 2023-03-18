import React from "react";
import { Link } from "react-router-dom";
import "./Navigations.css";

function Navigations() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/product'>Product</Link>
        </li>
        <li>
          <Link to='/addproduct'>Add Product</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigations;
