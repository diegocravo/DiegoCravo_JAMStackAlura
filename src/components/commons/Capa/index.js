import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";
import get from "lodash/get";
import { Grid } from "../../foundation/Grid";
import { Text } from "../../foundation/Text";
import {
  JavascriptIcon,
  ReactIcon,
  NextIcon,
  StyledIcon,
  TailwindIcon,
} from "../Icons";

const Capa = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Particles
        style={{ height: "100vh", width: "100vh", position: "absolute" }}
        params={{
          particles: {
            color: {
              value: "#fff",
            },
            line_linked: {
              color: "#fff",
            },
          },
        }}
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
          <div
            style={{
              padding: "24px",
              backgroundColor: "#05192d",
              opacity: "0.95",
              borderRadius: "5px",
            }}
          >
            <Text
              variant="title2"
              tag="h1"
              // textAlign="right"
              textAlign={{
                xs: "center",
                md: "center",
              }}
              color={"#21c25e"}
            >
              Diego Cravo Teixeira
            </Text>
            <Text
              variant="title2"
              tag="h2"
              // textAlign="right"
              textAlign={{
                xs: "center",
                md: "center",
              }}
              color={"#21c25e"}
            >
              Front-end Developer
            </Text>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <JavascriptIcon />
              <ReactIcon />
              <NextIcon />
              <StyledIcon />
              <TailwindIcon />
            </div>
          </div>
        </Grid.Col>
      </Grid.Container>
    </div>
  );
};

export default Capa;
