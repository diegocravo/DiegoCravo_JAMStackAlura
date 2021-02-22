import React from "react";
import styled from "styled-components";
import get from "lodash/get";
import { Text } from "../../foundation/Text";
import { Grid } from "../../foundation/Grid";

const Destaques = () => {
  return (
    <div>
      <Grid.Container>
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
              <Text as="h2" variant="paragraph1"></Text>
            </div>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </div>
  );
};

export default Destaques;
