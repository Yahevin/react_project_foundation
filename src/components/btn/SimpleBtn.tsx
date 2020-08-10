import React from "react";
import styled from "styled-components";
import simpleBtnProps from "src/interfaces/simpleBtnProps";
import COLORS from "../../constants/colors";


const StyledBtn = styled.button<{background:string, disabled: boolean}>`
    padding: 6px 16px;
    color: #fff;
    border: 0;
    outline: none;
    border-radius: 15px;
    transition: all 0.3s ease;
    background: ${props=>props.background};
    cursor: ${props=>props.disabled ? 'not-allowed' : 'pointer'};
   
    &:active {
      transform: translateY(2px);
    }
`;

function SimpleBtn (props: simpleBtnProps) {

    const setBgColor = () => {
        if (props.disabled) {
            return COLORS.light_grey;
        } else {
            return props.theme;
        }
    };

    return (
        <StyledBtn background={setBgColor()} disabled={props.disabled}>
            { props.children }
        </StyledBtn>
    )
}

export default SimpleBtn;