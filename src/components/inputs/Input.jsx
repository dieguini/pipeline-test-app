import React from 'react';
import './styles/input.css';

const Input = (props) => {

  const { labelName, ...inputProps } = props; 

  return (
    <div className='input__wrapper'>
        <label htmlFor={props.id} className='input__label'>{labelName}</label>
        <input {...inputProps} />
    </div>
  )

}

export default Input