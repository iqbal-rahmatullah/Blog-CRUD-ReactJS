import React from 'react'
import "./Result.css"

function Result(props) {
  return (
    <div>
        <p>Nama : {props.nama}</p>
        <p>Umur : {props.umur}</p>
        <p>Alamat : {props.alamat}</p>
    </div>
  )
}

export default Result