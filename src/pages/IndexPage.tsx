import React, { useEffect } from "react";
import { Link, Route, Switch, useHistory} from "react-router-dom";

import BtnPreview from "@/pages/BtnPreview";
import EventPreview from "@/pages/EventPreview";

import Header from "@/styled-components/Header";
import Content from "@/styled-components/Content";
import PageSize from "@/styled-components/PageSize";
import Center from "@/styled-components/flex/Center";
import {VerticalCentered, VerticalCentered__item} from "@/styled-components/flex/VericalCentered";

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
                        <VerticalCentered__item>
                            <Link to="/">Home</Link>
                        </VerticalCentered__item>

                        <VerticalCentered__item>
                            <Link to="/btn">BtnPreview</Link>
                        </VerticalCentered__item>

                        <VerticalCentered__item>
                            <Link to="/events">EventPreview</Link>
                        </VerticalCentered__item>
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