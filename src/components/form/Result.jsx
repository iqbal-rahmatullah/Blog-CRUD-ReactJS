import React from 'react'
import "./Result.css"

function Result(props) {
  return (
    <div>
        <p>{props.nama}</p>
        <p>{props.umur}</p>
        <p>{props.alamat}</p>
        <p>{props.jurusan}</p>
    </div>
  )
}

export default Result