import styled from "styled-components";
import {animated} from "react-spring";
import HorizontalCentered from "@styled/flex/HorizontalCentered";

export const ColorBox = styled(HorizontalCentered)`
    height: 400px;
    width: 100%;
`;

export const ColorGrid = styled(animated.div)`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 25px;
  padding: 25px;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`;

export const ColorGrid__item = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;
`;