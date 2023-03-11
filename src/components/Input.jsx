import React from 'react'

function Input(props) {
  return (
    <>
        <label htmlFor={props.labelFor}>{props.label} </label>
        <input type={props.typeInput} id={props.idInput} name={props.nameInput} onChange={props.inputOnchange}/>
    </>
  )
}

export default Input