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
    const [message, setMessage] = React.useState('');

    const getResponse = () => {
        return new Promise<string>((resolve,reject) =>{
            const xhr = new XMLHttpRequest();

            xhr.open('GET', 'https://httpbin.org/get');
            xhr.send();

            xhr.onload = () => {
                return resolve(xhr.responseText);
            };
            xhr.onerror = () => {
                return reject('error');
            }
        })
    };

    const handleClick = async () => {
        try {
            const response:string = await getResponse();

            setMessage(response);
        } catch (error) {
            setMessage(error);
        }
    };

    return (
        <>
            <StyledList>
                {btnList.map((item)=>
                    <SimpleBtn
                        key={item.id}
                        theme={item.theme}
                        disabled={item.disabled}
                        is_large={item.is_large}
                        callback={handleClick}
                    >
                        { item.children }
                    </SimpleBtn>
                )}
            </StyledList>

            <p>
                { message }
            </p>
        </>
    );
}

export default App;

