import React from "react";
import get from "lodash/get";
import styled from "styled-components";
import Text from "../../foundation/Text";
import { propToStyle } from "../../../theme/utils/propToStyle";

const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: #fff;
  &:hover,
  &:focus {
    box-shadow: 0 8px 16px 0 rgba(240, 231, 232, 0.3);
  }
`;

const Img = styled.img`
  width: 100%;
  height: "350px";
  ${propToStyle("alt")}
  ${propToStyle("src")}
`;

const CardText = styled.div`
  width: 100%;
`;

export const Card = {
  Container,
  Img,
  CardText,
};
