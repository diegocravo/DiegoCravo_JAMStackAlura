import React from "react";
import styled from "styled-components";
import get from "lodash/get";
import { Text } from "../../foundation/Text";
import { Grid } from "../../foundation/Grid";
import Destaques from "../Destaques";

const WrapperProjetos = () => {
  return (
    <Grid.Container>
      <Grid.Col
        value={{ xs: 12, md: 12 }}
        offset={{ xs: 0, md: 0 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text as="h1" variant="title">
          Meus Projetos
        </Text>
      </Grid.Col>

      <Grid.Row>
        <Grid.Col
          value={{ xs: 12, md: 6, lg: 4 }}
          offset={{ xs: 0, md: 0, lg: 0 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src="https://via.placeholder.com/300x350" />
          <div style={{ backgroundColor: "#F0F1E8", width: "300px" }}>
            <Text as="h2" variant="paragraph1" textAlign={"center"}>
              Projeto
            </Text>
          </div>
        </Grid.Col>

        <Grid.Col
          value={{ xs: 12, md: 6, lg: 4 }}
          offset={{ xs: 0, md: 0, lg: 0 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src="https://via.placeholder.com/300x350" />
          <div style={{ backgroundColor: "#F0F1E8", width: "300px" }}>
            <Text as="h2" variant="paragraph1" textAlign={"center"}>
              Projeto
            </Text>
          </div>
        </Grid.Col>

        <Grid.Col
          value={{ xs: 12, md: 6, lg: 4 }}
          offset={{ xs: 0, md: 0, lg: 0 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img src="https://via.placeholder.com/300x350" />
          <div style={{ backgroundColor: "#F0F1E8", width: "300px" }}>
            <Text as="h2" variant="paragraph1" textAlign={"center"}>
              Projeto
            </Text>
          </div>
        </Grid.Col>
      </Grid.Row>
      <Destaques />
    </Grid.Container>
  );
};

export default WrapperProjetos;
