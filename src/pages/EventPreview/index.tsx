import React, {useState} from "react";
import Level from "@/pages/EventPreview/parts/Level";
import EventControl from "@/pages/EventPreview/parts/EventControl";
import {Presentation, Presentation__view, Presentation__control} from "@styled/Presentation";
import {INITIAL_STATE} from "@/constants/eventPreviewIni";

import IRule from "@/pages/EventPreview/interface/IRule";
import ITurnHandler from "@/pages/EventPreview/interface/ITurnHandler";

function EventPreview() {
    const ini:IRule[] = INITIAL_STATE;
    const [rule, setRule] = useState(ini);


    const turnHandler:ITurnHandler = (prop,val,id)=>{
        setRule(rule.map((item:any)=>{
            if(item.id === id) {
                item[prop] = val;
            }
            return item;
        }));
    };

    const CreateLevel = (props:{order:number, children?:any})=>{
        return (
            <Level
                stop={rule[props.order].stop}
                capture={rule[props.order].capture}
                index={props.order}
            >
                {props.children}
            </Level>
        )
    };

    return (
        <Presentation>
            <Presentation__view>
                <CreateLevel order={0}>
                    <CreateLevel order={1}>
                        <CreateLevel order={2}>
                            <CreateLevel order={3}/>
                        </CreateLevel>
                    </CreateLevel>
                </CreateLevel>
            </Presentation__view>
            <Presentation__control>
                <EventControl rule={rule} callback={turnHandler}/>
            </Presentation__control>
        </Presentation>
    )
}

export default EventPreview;