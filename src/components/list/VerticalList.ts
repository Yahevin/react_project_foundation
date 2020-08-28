import styled from "styled-components";
import {Presentation__control} from "@styled/Presentation";

const VerticalList = styled(Presentation__control)`
  display: grid;
  grid-gap: 12px 0;
  grid-template-columns: 1fr;
`;

export default VerticalList;