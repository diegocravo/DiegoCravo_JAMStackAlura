import React from "react";
import styled, { css } from "styled-components";
import get from "lodash/get";
import { Text } from "../../foundation/Text";
import { Grid } from "../../foundation/Grid";
import { breakpointsMedia } from "../../../theme/utils/breakpointsMedia";

const DestaquesWrapper = styled.div`
  background-color: ${({ theme }) => get(theme, `colors.secondary.main.color`)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      margin-top: 32px;
      margin-bottom: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 100%;
    `,
  })}
`;

const Destaques = () => {
  return (
    <DestaquesWrapper>
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
            Destaques
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
            <div
              style={{
                display: "flex",
                backgroundColor: "#F0F1E8",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                padding: "16px",
              }}
            >
              <img src="https://via.placeholder.com/600x300" />
              <Text as="h2" variant="paragraph1">
                Destaques
              </Text>
            </div>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </DestaquesWrapper>
  );
};

export default Destaques;
