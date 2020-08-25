import React, {useRef} from "react";
import styled from "styled-components";
import COLORS from "@/constants/colors";

const Frame = styled.div`
    padding: 40px;
    color: ${COLORS.slate};
    border: 1px solid ${COLORS.orange};
    background-color: currentColor;
    border-radius: 4px;
    transition: all 0.1s ease;
`;

interface ILevel {
    stop: boolean;
    index: number;
    capture: boolean;
    children?: any;
}
type PositiveOrDenied = 1 | -1;


function Level(props: ILevel) {
    const $frame = useRef(null);

    const handler = (e:any) =>{
        if (props.stop) e.stopPropagation();

        console.log('bubble',props.index);
        setColor(1200, -1)
    };
    const captureHandler = (e:any) =>{
        if (!props.capture) return;

        console.log('catch',props.index);
        setColor(0,1);
    };
    const setColor = (delay: number, direction: PositiveOrDenied) =>{
        setTimeout(()=>{
            $frame.current.style.color = COLORS.red;

            setTimeout(()=>{
                $frame.current.style.color = null;
            },200);
        },200 * props.index * direction + delay);
    };

    return (
        <Frame onClick={handler} onClickCapture={captureHandler} ref={$frame}>
            {props.children}
        </Frame>
    )
}

export default Level;