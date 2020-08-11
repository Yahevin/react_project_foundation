import React from "react";
import styled from "styled-components";
import SimpleBtn from "../components/btn/SimpleBtn";
import simpleBtnProps from "src/interfaces/simpleBtnProps";
import COLORS from "../constants/colors";

const btnList: simpleBtnProps[] = [
    {
        theme: COLORS.red,
        disabled: false,
        children: 'click 1',
        is_large: false,
    },
    {
        theme: COLORS.blue,
        disabled: false,
        children: 'click 2',
        is_large: true,
    },
    {
        theme: COLORS.green,
        disabled: false,
        children: 'click 3',
        is_large: false,
    },
    {
        theme: COLORS.green,
        disabled: true,
        children: 'click 4',
        is_large: false,
    },
];

const StyledList = styled.div`
    display: flex;
    width: 50%;
    margin: 200px auto;
    justify-content: space-between;
`;

function App() {
    return (
        <StyledList>
            {btnList.map((item)=>
                <SimpleBtn theme={item.theme} disabled={item.disabled} is_large={item.is_large}>
                    { item.children }
                </SimpleBtn>
            )}
        </StyledList>
    );
}



export default App;

