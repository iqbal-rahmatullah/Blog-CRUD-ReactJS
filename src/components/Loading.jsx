import React from "react";
import imgLoading from "../assets/loading.gif";
import "./Loading.css";

function Loading() {
  return (
    <div className='loading'>
      <img src={imgLoading} alt='loading' />
    </div>
  );
}

export default Loading;
