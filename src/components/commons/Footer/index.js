import React from "react";
import get from "lodash/get";
import styled from "styled-components";
import { LinkedinIcon, GithubIcon } from "../Icons";

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => get(theme, `colors.prymary.main.color`)};
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding-right: 28px;
  padding-left: 28px;
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://linkedin.com/in/diegocravo">
        <LinkedinIcon />
      </a>
      <a href="https://github.com/diegocravo">
        <GithubIcon />
      </a>
    </FooterWrapper>
  );
}
