import React from "react";
import styled, { css } from "styled-components";
import get from "lodash/get";
import { Text } from "../../foundation/Text";
import { Grid } from "../../foundation/Grid";
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";

const FotoDestaque = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  margin-bottom: 32px;
  background-image: url(https://via.placeholder.com/600x300);
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
`;

const DescricaoDestaque = styled.div`
  width: 100%;
  margin-bottom: 32px;
  height: 400px;
`;

const Destaques = () => {
  return (
    <div style={{ backgroundColor: "#f0f1e8" }}>
      <Grid.Container>
        <Grid.Col
          value={{ xs: 12, md: 12 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Text as="h1" variant="title2">
            DESTAQUES
          </Text>
        </Grid.Col>

        <Grid.Row>
          <Grid.Col
            value={{ xs: 12, md: 8 }}
            offset={{ xs: 0, md: 0 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="initial"
          >
            <FotoDestaque />
          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 4 }}
            offset={{ xs: 0, md: 0 }}
            display="block"
            alignItems="center"
            justifyContent="center"
            flexDirection="initial"
          >
            <DescricaoDestaque>
              <div>
                <Text as="h1" variant="title2" textAlign={"center"}>
                  Projeto
                </Text>
              </div>
              <div>
                <Text as="p" variant="paragraph1">
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum
                </Text>
              </div>
            </DescricaoDestaque>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </div>
  );
};

export default Destaques;
