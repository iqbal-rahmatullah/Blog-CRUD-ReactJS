import React from 'react'

function Button(props) {
  return (
    <button onClick={props.clickFunction}>{props.judulButton}</button>
  )
}

export default Button