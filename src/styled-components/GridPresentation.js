import styled from "styled-components";

const GridPresentation = styled.div`
    display: grid;
    grid-gap: 42px 200px;
    grid-template-columns: 3fr 1fr;
    grid-auto-rows: minmax(auto,200px);
`;

export default GridPresentation;
