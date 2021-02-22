import React from "react";
import { Text } from "../../foundation/Text";
import { Button } from "../Button";
import { MenuWrapper } from "./styles/MenuWrapper";
import { Logos } from "../../../theme/Logos";

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuWrapper.Main>
        <MenuWrapper.LeftSide>
          <Logos />
        </MenuWrapper.LeftSide>

        <MenuWrapper.RightSide>
          <Button type="button" ghost variant="primary.main">
            SOBRE MIM
          </Button>
          <Button type="button" ghost variant="primary.main">
            CONTATO
          </Button>
        </MenuWrapper.RightSide>
      </MenuWrapper.Main>
    </MenuWrapper>
  );
}
