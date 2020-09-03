import React, {useState} from "react";
import COLORS from "@/constants/colors";
import LOREM from "@/constants/Lorem";

import SimpleBtn from "@/components/btn/SimpleBtn";
import ToggleOnHooks from "@/components/springs/ToggleOnHooks";
import ChainAndTrail from "@/pages/SpringPreview/parts/ChainAndTrail";
import GridPresentation from "@styled/GridPresentation";

function SpringPreview() {
    const [sliderOpen,setSlider] = useState(true);
    const [bannersOpen,setBanners] = useState(true);

    return (
        <GridPresentation>
            <ToggleOnHooks isOpen={sliderOpen}>
                <>
                    {LOREM.split(' ').map((item,index)=>
                        <p key={index}>{item}</p>
                    )}
                </>
            </ToggleOnHooks>
            <SimpleBtn
                theme={COLORS.orange}
                disabled={false}
                is_large={true}
                callback={()=>{setSlider(prev=>!prev)}}>
                Toggle
            </SimpleBtn>

            <ChainAndTrail isOpen={bannersOpen}/>
            <SimpleBtn
                theme={COLORS.orange}
                disabled={false}
                is_large={true}
                callback={()=>{setBanners(prev=>!prev)}}>
                Toggle
            </SimpleBtn>

        </GridPresentation>
    )
}

export default SpringPreview;