import React from "react";
import styled from "styled-components";
import { Spring, animated } from 'react-spring/renderprops';

import IToggle from "@/interfaces/IToggle";
import COLORS from "@/constants/colors";


const Wrap = styled.div`
    overflow: hidden;
    background: ${COLORS.grey};
    border-radius: 10px;   
    & > p {
      display: block;
      margin: 0 10px;
      padding: 10px 0;
      &:not(:first-child) {
        border-top: 1px solid ${COLORS.orange};
      }
    }
`;
const Animated = animated(Wrap);


function Toggle(props:IToggle) {


    return (
        <Spring
            native
            force
            config={{ mass:5, tension: 200, friction: 25, precision: 1 }}
            from={{ height: props.isOpen ? 0 : 'auto' }}
            to={{ height: props.isOpen ? 'auto' : 0 }}>
            {style => (
                <Animated style={style}>
                    {props.children}
                </Animated>
            )}
        </Spring>
    )
}

export default Toggle;