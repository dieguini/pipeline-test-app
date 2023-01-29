import React from 'react';
import './styles/form.css';
import styled from 'styled-components';

export const FormAlert = styled.div`

  font-size: .9em;
  color: #956da5bd;
  background:#fae8ff86;
  font-weight: bold;
  width: 100%;
  padding: 10px;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  flex-wrap: wrap;

`



const Form = (props) => {
    
  return (
    <form {...props} autoComplete={'off'}>
        {props.children}
        <small>Terms & conditions</small>
    </form>
  )
}

export default Form