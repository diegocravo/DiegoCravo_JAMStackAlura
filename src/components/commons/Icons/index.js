import styled from "styled-components";
import get from "lodash/get";
import { ReactLogo } from "@styled-icons/simple-icons/ReactLogo";
import { StyledComponents } from "@styled-icons/simple-icons/StyledComponents";
import { NextDotJs } from "@styled-icons/simple-icons/NextDotJs";
import { Tailwindcss } from "@styled-icons/simple-icons/Tailwindcss";
import { Javascript } from "@styled-icons/simple-icons/Javascript";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
import { Github } from "@styled-icons/bootstrap/Github";

export const JavascriptIcon = styled(Javascript)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, `colors.secondary.main.color`)};
  height: 39px;
`;

export const ReactIcon = styled(ReactLogo)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, `colors.secondary.main.color`)};
  height: 39px;
`;

export const StyledIcon = styled(StyledComponents)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, `colors.secondary.main.color`)};
  height: 39px;
`;

export const TailwindIcon = styled(Tailwindcss)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, `colors.secondary.main.color`)};
  height: 39px;
`;

export const NextIcon = styled(NextDotJs)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, `colors.secondary.main.color`)};
  height: 39px;
`;

export const LinkedinIcon = styled(Linkedin)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, `colors.secondary.main.color`)};
  height: 39px;
`;

export const GithubIcon = styled(Github)`
  margin: 0px 10px;
  color: ${({ theme }) => get(theme, `colors.secondary.main.color`)};
  height: 39px;
`;
