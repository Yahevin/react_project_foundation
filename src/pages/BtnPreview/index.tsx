import React from "react";
import SimpleBtn from "@/components/btn/SimpleBtn";
import btnList from "@/constants/testData";
import CenteredSb from "@/styled-components/flex/CenteredSb";


function BtnPreview() {
    const [message, setMessage] = React.useState('');

    const getResponse = () => {
        return new Promise<string>((resolve,reject) =>{
            const xhr = new XMLHttpRequest();

            xhr.open('GET', 'https://httpbin.org/get');
            xhr.send();

            xhr.onload = () => {
                console.log(JSON.parse(xhr.responseText));

                return resolve('response succeed, see console');
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
            <CenteredSb>
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
            </CenteredSb>

            <pre>
                { message }
            </pre>
        </>
    );
}

export default BtnPreview;

