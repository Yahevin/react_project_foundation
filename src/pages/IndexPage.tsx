import React, { useEffect } from "react";
import { Route, Switch, useHistory} from "react-router-dom";

import BtnPreview from "@/pages/BtnPreview";
import EventPreview from "@/pages/EventPreview/index";

import Header from "@styled/Header";
import Content from "@styled/Content";
import PageSize from "@styled/PageSize";
import Center from "@styled/flex/Center";
import VerticalCentered from "@styled/flex/VericalCentered";
import HeaderNavLink from "@/components/parts/HeaderNavLink";

function IndexPage() {
    let history = useHistory();

    useEffect(()=>{
        const hash = window.location.hash;
        history.push(hash.replace(/#/,''));
    });

    return (
        <>
            <Header>
                <PageSize>
                    <VerticalCentered>
                        <HeaderNavLink link={"/"}>Home</HeaderNavLink>
                        <HeaderNavLink link={"/btn"}>BtnPreview</HeaderNavLink>
                        <HeaderNavLink link={"/events"}>EventPreview</HeaderNavLink>
                        <HeaderNavLink link={"/events"}>EventPreview</HeaderNavLink>
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
                        <Route path="/btn">
                            <BtnPreview />
                        </Route>
                        <Route path="/events">
                            <EventPreview />
                        </Route>
                    </Switch>
                </PageSize>
            </Content>
        </>
    )
}


export default  IndexPage;