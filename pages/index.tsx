import React, {useEffect} from "react";
import Header from "@/components/page/Header";
import Center from "@styled/flex/Center";
import Content from "@styled/Content";
import {useRouter} from "next/router";

function IndexPage() {
    const router = useRouter();

    useEffect(()=>{
        const hash = window.location.hash;
        if (hash.length === 0) return;
        router.push(hash.replace(/#/,''));
    },[]);

    return (
        <>
            <Header/>
            <Content>
                <Center>
                    <a href="https://github.com/Yahevin/knowledge-base" target="_blank" rel="noreferrer noopener">
                        Knowledge base
                    </a>
                </Center>
            </Content>
        </>
    )
}

export default IndexPage;
