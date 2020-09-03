import React, {useCallback} from "react";
import {useLocation} from "react-router-dom";
import styled from "styled-components";

import ListWithUnderline from "@/components/list/ListWithUnderline";

import {PageSize} from "@styled/PageSize";
import RouteLink from "@styled/RouteLink";
import VerticalCentered from "@styled/flex/VericalCentered";

import COLORS from "@/constants/colors";
import PAGE_LINKS from "@/constants/pageLinks";


const HeadTag = styled.header`
    width: 100%;
    height: 60px;
    border-bottom: 2px solid ${COLORS.light_grey};
    background: ${COLORS.grey};
`;

function Header() {
    const location = useLocation();

    const getRouteIndex = useCallback(():number => {
        return PAGE_LINKS.findIndex((item)=>{
            return item.path === location.pathname;
        });
    },[location.pathname]);

    return (
        <HeadTag>
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
        </HeadTag>
    )
}

export default Header;