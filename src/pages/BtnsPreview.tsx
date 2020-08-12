import React from "react";
import styled from "styled-components";
import SimpleBtn from "@/components/btn/SimpleBtn";
import btnList from "@/constants/testData";


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
                <SimpleBtn
                    key={item.id}
                    theme={item.theme}
                    disabled={item.disabled}
                    is_large={item.is_large}
                >
                    { item.children }
                </SimpleBtn>
            )}
        </StyledList>
    );
}

export default App;

