import { MDBBtn } from 'mdb-react-ui-kit';
import styled, { css } from 'styled-components';

import React, { useState } from "react";
import { MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem } from 'mdb-react-ui-kit';


const text = css`

    color: var(--main-color);
    background: none;
    box-shadow: none;
    transition: 500ms;


    &:hover {
        background: linear-gradient(60deg, var(--main-color-light), var(--main-color-neutral));
        color: var(--neutral-light);
    }

`


const special = css`
    background: linear-gradient(60deg,var(--secondary-color) , var(--secondary-color-light));
    font-weight: bold;
    color: var(--neutral-dark);
    border: none;

    &:hover {
        background:none;
        background-color: var(--secondary-color);
        
        color: var(--neutral-dark);
        border: none;
    }
`


const outline = css`

    color: var(--main-color);
    border: 1px solid var(--main-color);
    background: none;
    box-shadow: none;
    transition: 500ms;


    &:hover {
        background: linear-gradient(60deg, var(--main-color-light), var(--main-color-neutral));
        color: var(--neutral-light);
    }

`


const disabled = css`

    color: var(--neutral-light);
    background: #b5c1ff;

`

const request = css`
    flex: 1;
    &:hover {
        color: #3b71ca;
    }
`
 

const buttonVariants = {
    text,
    outline,
    disabled,
    special,
    request
}


const getVariant = (props) => {
    if(props.disabled)
        return buttonVariants.disabled;
    return buttonVariants[props.variant] || [];
}


export const SimpleButton = styled(MDBBtn)`
    background: linear-gradient(60deg, var(--main-color-light), var(--main-color-neutral));
    transition: 250ms;
    box-shadow: none;
    border: 1px solid;
    width: 100%;
    
    &:hover {
        background: none;
        box-shadow: none;
        color: var(--main-color);
        border: 1px solid var(--main-color);
    }

    &:disabled {
        background: linear-gradient(60deg, var(--main-color-light), var(--main-color-neutral));
        opacity: 0.3;
    }
    
    ${ props => getVariant(props) }
    
    font-weight: bold;
`;

export const Dropdown = ({ selectedOption, setSelectedOption }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

    const style = {
        background: 'linear-gradient(60deg, var(--main-color-light), var(--main-color-neutral))',
        transition: '500ms',
        boxShadow: 'none',
        border: '1px solid',
        width: '100%',
    }

    return (
        <MDBDropdown isopen={isOpen.toString()}>
            <MDBDropdownToggle style={style} onClick={() => setIsOpen(!isOpen)}>
            {selectedOption}
            </MDBDropdownToggle>
            <MDBDropdownMenu style={style}>
            {selectedOption === "Frequent Requests" ? 
                <MDBDropdownItem className="text-center text-white" onClick={() => handleOptionSelect('History Requests')}>HISTORY REQUESTS</MDBDropdownItem>
                :
                <MDBDropdownItem className="text-center text-white" onClick={() => handleOptionSelect('Frequent Requests')}>FREQUENT REQUESTS</MDBDropdownItem>
            }
            </MDBDropdownMenu>
        </MDBDropdown>
        );
  }