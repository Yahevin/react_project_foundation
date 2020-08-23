import React, { useEffect } from "react";
import { Route, Switch, useHistory, Link} from "react-router-dom";

import BtnPreview from "@/pages/BtnPreview";
import EventPreview from "@/pages/EventPreview/index";

import Header from "@styled/Header";
import Content from "@styled/Content";
import PageSize from "@styled/PageSize";
import Center from "@styled/flex/Center";
import VerticalCentered from "@styled/flex/VericalCentered";
import ListWithUnderline from "@/components/list/ListWithUnderline";

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
                        <ListWithUnderline>
                            <Link to={"/"}>Home</Link>
                            <Link to={"/btn"}>BtnPreview</Link>
                            <Link to={"/events"}>EventPreview</Link>
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