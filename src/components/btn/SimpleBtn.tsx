import React from "react";
import styled from "styled-components";
import ISimpleBtnProps from "@/interfaces/ISimpleBtnProps";
import COLORS from "@/constants/colors";


const StyledBtn = styled.button<{background:string, disabled: boolean, is_large:boolean}>`
    width: 100%;
    height: max-content;
    color: #fff;
    border: 0;
    outline: none;
    line-height: 1;
    border-radius: 15px;
    transition: all 0.3s ease;
    padding: ${props=>props.is_large ? '8px 20px' : '6px 16px'};
    font-size: ${props=>props.is_large ? '18px' : '12px'};
    background: ${props=>props.background};
    cursor: ${props=>props.disabled ? 'not-allowed' : 'pointer'};
   
    &:active {
      transform: translateY(2px);
    }
`;

function SimpleBtn (props: ISimpleBtnProps) {

    const setBgColor = () => {
        if (props.disabled) {
            return COLORS.light_grey;
        } else {
            return props.theme;
        }
    };

    return (
        <StyledBtn
            onClick={props.callback}
            background={setBgColor()}
            disabled={props.disabled}
            is_large={props.is_large}
        >
            { props.children }
        </StyledBtn>
    )
}

export default SimpleBtn;