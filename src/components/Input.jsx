import React from 'react';


const Input = (props) => {
	return (
  <div className="form-group">
    <label htmlFor={props.name} className="form-label">{props.title}</label>
    <input
      className="form-control"
      id={props.name}
      name={props.name}
      onChange={props.handlechange}
      type={props.inputtype}
      value={props.value}
      placeholder={props.placeholder}
      />
  </div>
)
}

export default Input;