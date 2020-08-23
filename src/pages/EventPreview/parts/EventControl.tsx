import React from "react";
import styled from "styled-components";

import CheckBox from "@/components/input/CheckBox";

import IRule from "@/pages/EventPreview/interface/IRule";
import ITurnHandler from "@/pages/EventPreview/interface/ITurnHandler";


const ControlRow = styled.div`
    display: flex;
    
    & + & {
      margin: 16px 0 0 0;
    }
`;
const ControlRow__item = styled.div`
    & + & {
      margin: 0 0 0 16px;
    }
`;



function EventControl(props: {rule:Array<IRule>, callback:ITurnHandler}) {
    return (
        <>
            {props.rule.map((item,index)=>{
                return (
                    <ControlRow key={item.id}>
                        <ControlRow__item as={CheckBox}
                            id={"stop-btn-" + item.id}
                            checked={item.stop}
                            callback={()=>{props.callback('stop', !item.stop, item.id)}}
                        >
                            Stop {item.id}
                        </ControlRow__item>

                        <ControlRow__item as={CheckBox}
                            id={"capture-btn-" + item.id}
                            checked={item.capture}
                            callback={()=>{props.callback('capture',!item.capture, item.id)}}
                        >
                            Capture {item.id}
                        </ControlRow__item>
                    </ControlRow>
                )
            })}
        </>
    )
}

export default EventControl;