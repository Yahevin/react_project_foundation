import React, {useEffect} from "react";
import Header from "@/components/page/Header";
import Content from "@styled/Content";
import {useRouter} from "next/router";
import EventPreview from "@/pages/EventPreview";

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
                <EventPreview />
            </Content>
        </>
    )
}

export default IndexPage;
