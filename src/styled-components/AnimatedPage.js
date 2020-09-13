import styled from "styled-components";
import {animated} from "react-spring";
import {PageSize_mixin} from "./PageSize";

const AnimatedPage = styled(animated.div)`
    ${PageSize_mixin};
    height: auto;
`;

export default AnimatedPage;