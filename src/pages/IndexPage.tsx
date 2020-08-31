import React, {useCallback, useEffect, useState} from "react";
import { Route, Switch, useHistory, useLocation} from "react-router-dom";

import ListWithUnderline from "@/components/list/ListWithUnderline";

import Header from "@styled/Header";
import Content from "@styled/Content";
import PageSize from "@styled/PageSize";
import Center from "@styled/flex/Center";
import VerticalCentered from "@styled/flex/VericalCentered";
import RouteLink from "@styled/RouteLink";

import PAGE_LINKS from "@/constants/pageLinks";
import ROUTES from "@/constants/Routes";

import RefHook from "@/pages/RefHook";
import CallbackRef from "@/pages/CallbackRef";
import LayoutEffect from "@/pages/LayoutEffect";
import EventPreview from "@/pages/EventPreview/index";
import MemoHook from "@/pages/MemoHook";
import SliderPreview from "@/pages/TogglePreview";

function IndexPage() {
    const history = useHistory();
    const location = useLocation();

    useEffect(()=>{
        const hash = window.location.hash;
        if (hash.length === 0) return;
        history.push(hash.replace(/#/,''));
    });

    const getRouteIndex = useCallback(():number => {
        return PAGE_LINKS.findIndex((item)=>{
            return item.path === location.pathname;
        });
    },[location.pathname]);

    return (
        <>
            <Header>
                <PageSize>
                    <VerticalCentered>
                        <ListWithUnderline initial={getRouteIndex()}>
                            {PAGE_LINKS.map((item)=>{
                                return (
                                    <RouteLink to={item.path} key={item.id}>
                                        {item.name}
                                    </RouteLink>
                                )
                            })}
                        </ListWithUnderline>
                    </VerticalCentered>
                </PageSize>
            </Header>
            <Content>
                <PageSize>
                    <Switch>
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
                </PageSize>
            </Content>
        </>
    )
}


export default  IndexPage;