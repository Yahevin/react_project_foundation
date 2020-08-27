import React, {useLayoutEffect, useEffect, useState} from "react";
import SimpleBtn from "@/components/btn/SimpleBtn";
import VerticalList from "@/components/list/VerticalList";
import {Presentation, Presentation__control, Presentation__view} from "@styled/Presentation";
import COLORS from "@/constants/colors";
import styled, {css} from "styled-components";

const Title = css`
  line-height: 1;
  & > div + div {
    margin: 4px 0 0 0;
  }
`;

const Title_3 = styled.h3`
  ${Title};
  font-size: 40px;
`;

const Title_4 = styled.h4`
  ${Title};
  font-size: 30px;
`;

const LayoutEffect = () => {
    const [flicker, setFlicker] = useState(0);
    const [smooth, setSmooth] = useState(0);

    useEffect(() => {
        if (flicker === 0) {
            setFlicker(1000000000000);
        }
    }, [flicker]);

    useLayoutEffect(() => {
        if (smooth === 0) {
            setSmooth(1000000000000);
        }
    }, [smooth]);

    return (
        <Presentation>
            <Presentation__view>
                <VerticalList>
                    <Title_4>
                        <div>Set throttle = x6 in performance</div>
                        <div>and tap ~10 times</div>
                    </Title_4>
                    <div>&nbsp;</div>
                    <Title_3>
                        Flick:  {flicker}
                    </Title_3>
                    <Title_3>
                        Smooth: {smooth}
                    </Title_3>
                </VerticalList>
            </Presentation__view>
            <Presentation__control>
                <VerticalList>
                    <SimpleBtn
                        theme={COLORS.orange}
                        disabled={false}
                        is_large={true}
                        callback={()=>{setFlicker(0);}}>
                        Reset flick
                    </SimpleBtn>

                    <SimpleBtn
                        theme={COLORS.orange}
                        disabled={false}
                        is_large={true}
                        callback={()=>{setSmooth(0);}}>
                        Reset smooth
                    </SimpleBtn>
                </VerticalList>
            </Presentation__control>
        </Presentation>
    );
};

export default LayoutEffect;