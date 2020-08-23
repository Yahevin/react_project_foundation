import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";

const NavLink = styled(Link)`
  & + & {
    margin-left: 14px;
  }
`;

function HeaderNavLink(props: {link:string, children?:any}) {
    return (
        <NavLink to={props.link}>
            {props.children}
        </NavLink>
    )
}

export default HeaderNavLink;