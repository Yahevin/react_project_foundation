import React, {createRef, useRef, useState} from "react";
import {Presentation, Presentation__control, Presentation__view} from "@styled/Presentation";
import VerticalList from "@/components/list/VerticalList";
import SimpleBtn from "@/components/btn/SimpleBtn";
import COLORS from "@/constants/colors";

interface IRefObject {current: undefined | number};

function RefHook() {
    const [renderIndex, setRenderIndex] = useState(1);
    const refFromUseRef:IRefObject = useRef();
    const refFromCreateRef:IRefObject = createRef();

    if (!refFromUseRef.current) {
        refFromUseRef.current = renderIndex;
    }

    if (!refFromCreateRef.current) {
        refFromCreateRef.current = renderIndex;
    }

    return (
        <Presentation>
            <Presentation__view>
                <VerticalList>
                    <p>Current render index: {renderIndex}</p>
                    <p>
                        RefFromUseRef value: {refFromUseRef.current}
                    </p>
                    <p>
                        RefFromCreateRef value: {refFromCreateRef.current}
                    </p>
                </VerticalList>
            </Presentation__view>
            <Presentation__control>
                <SimpleBtn
                    theme={COLORS.orange}
                    disabled={false}
                    is_large={true}
                    callback={() => setRenderIndex(prev => prev + 1)}>
                    Cause re-render
                </SimpleBtn>
            </Presentation__control>
        </Presentation>
    )
}

export default RefHook;