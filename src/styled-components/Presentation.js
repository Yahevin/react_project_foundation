import styled from "styled-components";

export const Presentation = styled.article`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`;
export const Presentation__control = styled.div`
    flex: 0 0 400px;
    padding: 0 0 0 100px;
`;
export const Presentation__view = styled.div`
    flex: 1 1 60%;
    min-height: 100px;
    
    ${Presentation__control} + & {
      margin: 42px 0 0 0;
    }
`;