import React from "react";
import IRule from "@/pages/EventPreview/interface/IRule";
import ITurnHandler from "@/pages/EventPreview/interface/ITurnHandler";

function EventControl(props: {rule:Array<IRule>, callback:ITurnHandler}) {
    return (
        <>
            {props.rule.map((item,index)=>{
                return (
                    <div>
                        <input type="checkbox"
                               id={"stop-btn-" + index}
                               onChange={()=>{props.callback('stop', !item.stop, index)}}/>
                        <label htmlFor={"stop-btn-" + index}>Stop {index}</label>

                        <input type="checkbox"
                               id={"capture-btn-" + index}
                               onChange={()=>{props.callback('capture',!item.capture, index)}}/>
                        <label htmlFor={"capture-btn-" + index}>Capture {index}</label>
                    </div>
                )
            })}
        </>
    )
}

export default EventControl;