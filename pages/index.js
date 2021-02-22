import React from "react";
import Footer from "../src/components/commons/Footer";
import Menu from "../src/components/commons/Menu";
import Capa from "../src/components/commons/Capa";
import { Button } from "../src/components/commons/Button";
import { Grid } from "../src/components/foundation/Grid";
import { Box } from "../src/components/foundation/layout/Box";
import { Text } from "../src/components/foundation/Text/index";
import Destaques from "../src/components/commons/Destaques";
import WrapperProjetos from "../src/components/commons/WrapperProjetos";

export default function Home() {
  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="linear-gradient(to right, #273225, #354033)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Capa />
      <Menu />
      <WrapperProjetos />
      <Destaques />
      <Footer />
    </Box>
  );
}
