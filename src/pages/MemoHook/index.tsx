import React, {useMemo, useState} from "react";
import {Presentation, Presentation__control, Presentation__view} from "@styled/Presentation";
import UpdateAttention from "@/pages/MemoHook/parts/UpdateAttention";
import SimpleBtn from "@/components/btn/SimpleBtn";
import CenteredSb from "@styled/flex/CenteredSb";
import VerticalList from "@/components/list/VerticalList";
import COLORS from "@/constants/colors";

function MemoHook() {
    const [necessary,setNecessary] = useState(0);
    const [useless,setUseless] = useState(0);

    const MemoizedChild = useMemo(()=>
            <UpdateAttention necessary={necessary}>
                Memoized
            </UpdateAttention>
    ,[necessary]);

    const memoizedProp = useMemo(()=>({prop: necessary}),[necessary]);

    return (
        <Presentation>
            <Presentation__view>
                <VerticalList>
                    <h3>
                        See console
                    </h3>
                    <div>
                        necessary: {necessary}
                    </div>
                    <div>
                        useless: {useless}
                    </div>
                    <CenteredSb>
                        <UpdateAttention necessary={necessary}>
                            Default
                        </UpdateAttention>

                        <UpdateAttention necessary={memoizedProp.prop}>
                            With memoized prop
                        </UpdateAttention>

                        {MemoizedChild}
                    </CenteredSb>
                </VerticalList>
            </Presentation__view>
            <Presentation__control>
                <VerticalList>
                    <SimpleBtn
                        theme={COLORS.orange}
                        disabled={false}
                        is_large={true}
                        callback={()=>{setNecessary(necessary + 1)}}>
                        + update children props
                    </SimpleBtn>

                    <SimpleBtn
                        theme={COLORS.orange}
                        disabled={false}
                        is_large={true}
                        callback={()=>{setUseless(useless + 1)}}>
                        + update useless state
                    </SimpleBtn>
                </VerticalList>
            </Presentation__control>
        </Presentation>
    )
}

export default MemoHook;