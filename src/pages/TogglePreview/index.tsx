import React, {useState} from "react";
import {Presentation, Presentation__control, Presentation__view} from "@styled/Presentation";
import COLORS from "@/constants/colors";
import LOREM from "@/constants/Lorem";

import SimpleBtn from "@/components/btn/SimpleBtn";
import ToggleOnHooks from "@/components/springs/ToggleOnHooks";

function TogglePreview() {
    const [isOpen,setOpen] = useState(false);

    return (
        <Presentation>
            <Presentation__view>
                <ToggleOnHooks isOpen={isOpen}>
                    <>
                        {LOREM.split(' ').map((item,index)=>
                            <p key={index}>{item}</p>
                        )}
                    </>
                </ToggleOnHooks>

            </Presentation__view>
            <Presentation__control>
                <SimpleBtn
                    theme={COLORS.orange}
                    disabled={false}
                    is_large={true}
                    callback={()=>{setOpen(prev=>!prev)}}>
                    Toggle
                </SimpleBtn>
            </Presentation__control>
        </Presentation>
    )
}

export default TogglePreview;