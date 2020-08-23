import styled from "styled-components";
import COLORS from "@/constants/colors";

const Header = styled.header`
    width: 100%;
    height: 60px;
    border-bottom: 2px solid ${COLORS.light_grey};
    background: ${COLORS.grey};
`;

export default Header;