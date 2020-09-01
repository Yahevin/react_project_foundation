import React, {useRef} from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import {animated, config, useTransition} from "react-spring";

import styled from "styled-components";

import ROUTES from "@/constants/Routes";
import PAGE_LINKS from "@/constants/pageLinks";

import EventPreview from "@/pages/EventPreview";
import MemoHook from "@/pages/MemoHook";
import RefHook from "@/pages/RefHook";
import CallbackRef from "@/pages/CallbackRef";
import LayoutEffect from "@/pages/LayoutEffect";
import SliderPreview from "@/pages/SpringPreview";

import {PageSize_mixin} from "@styled/PageSize";
import Center from "@styled/flex/Center";


const ContentTag = styled.article`
    margin: 200px 0;
    width: 100%;
    position: relative;
`;

const AnimatedPage = styled(animated.div)`
    ${PageSize_mixin};
    height: auto;
`;

function Content() {
    const location = useLocation();
    const mutable = useRef(0);

    const index: number = PAGE_LINKS.findIndex((item)=>{
        return item.path === location.pathname
    });

    const transitions = useTransition(location, location => location.pathname, {
        config: config.gentle,
        from: { opacity: 0,
            transform: `translate3d(${mutable.current > index ? '-50%' : '100%'},0,0)`
        },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0,
            transform: `translate3d(${mutable.current > index ? '100%' : '-50%'},0,0)`,
            position: 'absolute'
        },
    });
    mutable.current = index;

    return (
        <ContentTag>
            {transitions.map(({item,props,key})=>(
                <AnimatedPage key={key} style={props}>
                    <Switch location={item}>
                        <Route exact path={ROUTES.Home}>
                            <Center>
                                <a href="https://github.com/Yahevin/knowledge-base" target="_blank" rel="noreferrer noopener">
                                    Knowledge base
                                </a>
                            </Center>
                        </Route>
                        <Route path={ROUTES.EventPreview}>
                            <EventPreview />
                        </Route>
                        <Route path={ROUTES.MemoHook}>
                            <MemoHook/>
                        </Route>
                        <Route path={ROUTES.RefHook}>
                            <RefHook/>
                        </Route>
                        <Route path={ROUTES.CallbackRef}>
                            <CallbackRef/>
                        </Route>
                        <Route path={ROUTES.LayoutEffect}>
                            <LayoutEffect/>
                        </Route>
                        <Route path={ROUTES.SliderPreview}>
                            <SliderPreview/>
                        </Route>
                    </Switch>
                </AnimatedPage>
            ))}
        </ContentTag>
    )
}

export default Content;