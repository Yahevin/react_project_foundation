import React, {useEffect, useRef, useState} from "react";
import {useSpring, animated, useChain} from "react-spring";
import IToggle from "../../interfaces/IToggle";
import styled from "styled-components";
import COLORS from "@/constants/colors";

const Wrap = styled.div`
    overflow: hidden;
    height: auto;
    background: ${COLORS.grey};
    border-radius: 10px;   
    position: relative;
`;
const Group = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
      
    & > p {
      display: block;
      margin: 0 10px;
      padding: 10px 0;
      
      &:not(:first-child) {
        border-top: 1px solid ${COLORS.orange};
      }
    }
`;
const AnimatedWrap = animated(Wrap);


function ToggleOnHooks(props:IToggle) {
    const [height,setHeight] = useState('auto');
    const wrap = useSpring({
        config: {
            mass: props.isOpen ? 3 : 1,
            tension: 200, friction: 25, precision: 1,
        },
        height: props.isOpen ? height : 0
    });
    const $wrap = useRef(null);
    const $group = useRef(null);

    useEffect(()=>{
        if ($group === null) return;

        setHeight($group.current.offsetHeight)
    },[]);

    return (
        <AnimatedWrap ref={$wrap} style={wrap}>
            <Group ref={$group}>
                {props.children}
            </Group>
        </AnimatedWrap>
    )
}

export default ToggleOnHooks;