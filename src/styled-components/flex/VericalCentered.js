import styled from "styled-components";

export const VerticalCentered = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const VerticalCentered__item = styled.div`
    & + & {
      padding-left: 14px;
    }
`;

export default {VerticalCentered, VerticalCentered__item};