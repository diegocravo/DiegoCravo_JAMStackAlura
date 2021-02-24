import React from "react";
import styled from "styled-components";
import get from "lodash/get";
import { Text } from "../../foundation/Text";
import { Grid } from "../../foundation/Grid";
import Destaques from "../Destaques";
import { Card } from "../Cards";

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
          MEUS PROJETOS
        </Text>
      </Grid.Col>

      <div style={{ marginBottom: "32px" }}>
        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 6, lg: 4 }}
            offset={{ xs: 0, md: 0, lg: 0 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Card.Container>
              <Card.Img src="https://via.placeholder.com/300x350" />
              <Card.CardText>
                <Text as="h2" variant="paragraph1" textAlign={"center"}>
                  PROJETO
                </Text>
              </Card.CardText>
            </Card.Container>
          </Grid.Col>

          <Grid.Col
            value={{ xs: 12, md: 6, lg: 4 }}
            offset={{ xs: 0, md: 0, lg: 0 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Card.Container>
              <Card.Img src="https://via.placeholder.com/300x350" />
              <Card.CardText>
                <Text as="h2" variant="paragraph1" textAlign={"center"}>
                  PROJETO
                </Text>
              </Card.CardText>
            </Card.Container>
          </Grid.Col>

          <Grid.Col
            value={{ xs: 12, md: 6, lg: 4 }}
            offset={{ xs: 0, md: 0, lg: 0 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Card.Container>
              <Card.Img src="https://via.placeholder.com/300x350" />
              <Card.CardText>
                <Text as="h1" variant="paragraph1" textAlign={"center"}>
                  PROJETO
                </Text>
              </Card.CardText>
            </Card.Container>
          </Grid.Col>
        </Grid.Row>
      </div>
    </Grid.Container>
  );
};

export default WrapperProjetos;
