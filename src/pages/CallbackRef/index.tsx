import React, {useCallback, useState} from "react";
import SimpleBtn from "@/components/btn/SimpleBtn";
import VerticalList from "@/components/list/VerticalList";
import {Presentation, Presentation__control, Presentation__view} from "@styled/Presentation";
import COLORS from "@/constants/colors";
import styled from "styled-components";

const Title = styled.div<{size:number}>`
  font-size: ${props => props.size + 'px'};
  line-height: 1;
`;

function CallbackRef() {
    const [height, ref] = useClientHeight();
    const [size,setSize] = useState(30);

    const updateHeight = useCallback(() => {
        setSize(Math.floor(Math.random() * 80));
    },[]);

    return (
        <Presentation>
            <Presentation__view>
                <VerticalList>
                    {height !== null &&
                    <h2>Заголовок ниже имеет высоту {parseInt(height)} пикселей</h2>
                    }

                    <Title ref={ref} size={size}>
                        Привет, мир
                    </Title>
                </VerticalList>
            </Presentation__view>

            <Presentation__control>
                <SimpleBtn
                    theme={COLORS.orange}
                    disabled={false}
                    is_large={true}
                    callback={updateHeight}>
                    Set random font-size
                </SimpleBtn>
            </Presentation__control>
        </Presentation>
    );
}

function useClientHeight() {
    const [height, setHeight] = useState(null);
    const ref = (node:any) => {
        if (node !== null) {
            setHeight(node.offsetHeight);
        }
    };
    return [height, ref];
}

export default CallbackRef;