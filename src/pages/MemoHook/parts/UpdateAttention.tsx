import React, {useEffect, useRef} from "react";
import styled, {keyframes} from "styled-components";
import COLORS from "@/constants/colors";

const fire = keyframes`
  0% {
    color: ${COLORS.grey};
  }

  50% {
    color: ${COLORS.red};
  }
  
  100% {
    color: ${COLORS.grey};
  }
`;

const Attention = styled.div`
  flex: 1 1 auto;
`;
const Attention__info = styled.h4`
  margin: 12px 0 8px 0;
  text-transform: uppercase;
`;
const Attention__fire = styled.div`
  width: 100%;
  animation: ${fire} 0.6s ease-in-out;
  color: ${COLORS.grey};
  font-size: 20px;
  font-weight: bold;
`;

function UpdateAttention(props: {necessary:number, children:string}) {
    const $attention = useRef(null);

    useEffect(()=>{
        console.log(props.children);

        $attention.current.style.setProperty('animation','none');

        // This will be triggered in another round of event loop, after render
        setTimeout(()=>{
            $attention.current.style.setProperty('animation','');
        },0);
    });

    return (
        <Attention>
            <Attention__info>
                {props.children}
            </Attention__info>
            <Attention__fire ref={$attention}>
                Updated
            </Attention__fire>
        </Attention>
    )
}

export default UpdateAttention;