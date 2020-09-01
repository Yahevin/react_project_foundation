import styled,{css} from "styled-components";



export const PageSize_mixin = css`
   width: 100%;
   height: 100%;
   max-width: 1300px;
   padding: 0 40px;
   margin: auto;
`;

export const PageSize = styled.div`
  ${PageSize_mixin}
`;
