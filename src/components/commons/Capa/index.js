import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";
import get from "lodash/get";
import { Grid } from "../../foundation/Grid";
import { Text } from "../../foundation/Text";
import { ReactLogo } from "@styled-icons/simple-icons/ReactLogo";
import { StyledComponents } from "@styled-icons/simple-icons/StyledComponents";
import { NextDotJs } from "@styled-icons/simple-icons/NextDotJs";
import { Tailwindcss } from "@styled-icons/simple-icons/Tailwindcss";
import { Javascript } from "@styled-icons/simple-icons/Javascript";

const JavascriptIcon = styled(Javascript)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, `colors.secondary.main.color`)};
  height: 39px;
`;

const ReactIcon = styled(ReactLogo)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, `colors.secondary.main.color`)};
  height: 39px;
`;

const StyledIcon = styled(StyledComponents)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, `colors.secondary.main.color`)};
  height: 39px;
`;

const TailwindIcon = styled(Tailwindcss)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, `colors.secondary.main.color`)};
  height: 39px;
`;

const NextIcon = styled(NextDotJs)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, `colors.secondary.main.color`)};
  height: 39px;
`;

const Capa = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Particles
        style={{ height: "100vh", width: "100vh", position: "absolute" }}
      />
      <Grid.Container>
        <Grid.Col
          height={"100vh"}
          value={{ xs: 12, md: 12 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Text
            variant="title"
            tag="h1"
            // textAlign="right"
            textAlign={{
              xs: "left",
              md: "left",
            }}
          >
            Diego Cravo Teixeira
          </Text>
          <Text
            variant="title"
            tag="h2"
            // textAlign="right"
            textAlign={{
              xs: "left",
              md: "left",
            }}
          >
            Front-end Developer
          </Text>
          <div>
            <JavascriptIcon />
            <ReactIcon />
            <NextIcon />
            <StyledIcon />
            <TailwindIcon />
          </div>
        </Grid.Col>
      </Grid.Container>
    </div>
  );
};

export default Capa;
