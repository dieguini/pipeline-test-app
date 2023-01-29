import { MDBBtn } from 'mdb-react-ui-kit';
import styled, { css } from 'styled-components';



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
 

const buttonVariants = {
    text,
    outline,
    disabled,
    special
}


const getVariant = (props) => {
    if(props.disabled)
        return buttonVariants.disabled;
    return buttonVariants[props.variant] || [];
}


export const SimpleButton = styled(MDBBtn)`

    background: linear-gradient(60deg, var(--main-color-light), var(--main-color-neutral));
    transition: 500ms;
    box-shadow: none;
    border: 1px solid;

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

    width: 100%;
    font-weight: bold;

`