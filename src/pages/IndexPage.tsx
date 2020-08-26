import React, {useEffect, useState} from "react";
import { Route, Switch, Link, useHistory, useLocation} from "react-router-dom";

import EventPreview from "@/pages/EventPreview/index";
import MemoHook from "@/pages/MemoHook";
import ListWithUnderline from "@/components/list/ListWithUnderline";

import Header from "@styled/Header";
import Content from "@styled/Content";
import PageSize from "@styled/PageSize";
import Center from "@styled/flex/Center";
import VerticalCentered from "@styled/flex/VericalCentered";
import PAGE_ROUTES from "@/constants/pageRoutes";

function getRouteIndex(route:string):number {
    return PAGE_ROUTES.findIndex((item)=>{
        return item.path === route;
    });
}

function IndexPage() {
    const history = useHistory();
    const location = useLocation();
    const [routeIndex, setRouteIndex] = useState(0);

    useEffect(()=>{
        const hash = window.location.hash;
        if (hash.length === 0) return;
        history.push(hash.replace(/#/,''));
    });

    useEffect(()=>{
        const index = getRouteIndex(location.pathname);
        if (routeIndex !== index) setRouteIndex(index);
    });

    return (
        <>
            <Header>
                <PageSize>
                    <VerticalCentered>
                        <ListWithUnderline initial={routeIndex}>
                            {PAGE_ROUTES.map((item)=>{
                                return (
                                    <Link to={item.path} key={item.id}>
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </ListWithUnderline>
                    </VerticalCentered>
                </PageSize>
            </Header>
            <Content>
                <PageSize>
                    <Switch>
                        <Route exact path="/">
                            <Center>
                                <a href="https://github.com/Yahevin/knowledge-base" target="_blank" rel="noreferrer noopener">
                                    Knowledge base
                                </a>
                            </Center>
                        </Route>
                        <Route path="/events">
                            <EventPreview />
                        </Route>
                        <Route path="/memo">
                            <MemoHook/>
                        </Route>
                    </Switch>
                </PageSize>
            </Content>
        </>
    )
}


export default  IndexPage;