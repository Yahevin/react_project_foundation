import React from "react";
import styled from "styled-components";

const Check = styled.div`
    display: flex;
    align-items: center;
`;

const Check__input = styled.input`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

const Check__label = styled.label`
    margin: 0 0 0 6px;
    font-size: 18px;
    cursor: pointer;
`;

interface ICheckBox {
    id:string,
    children?:any
    checked:boolean,
    className?:string,
    callback:Function,
}

function CheckBox(props:ICheckBox) {
    return (
        <Check className={props.className || ''}>
            <Check__input
                type="checkbox"
                id={props.id}
                checked={props.checked}
                onChange={()=>{props.callback()}}/>
            <Check__label htmlFor={props.id}>
                {props.children}
            </Check__label>
        </Check>
    )
}

export default CheckBox;