import React, { useEffect} from "react";
import { useHistory } from "react-router-dom";

import Header from "@/components/page/Header";
import Content from "@/components/page/Content";


function IndexPage() {
    const history = useHistory();

    useEffect(()=>{
        const hash = window.location.hash;
        if (hash.length === 0) return;
        history.push(hash.replace(/#/,''));
    });

    return (
        <>
            <Header/>
            <Content/>
        </>
    )
}


export default  IndexPage;