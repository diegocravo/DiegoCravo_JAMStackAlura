import React from "react";
import get from "lodash/get";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { propToStyle } from "../../../theme/utils/propToStyle";

export const TextStyleVariantsMap = {
  title: css`
    color: ${({ theme }) => get(theme, `colors.secondary.main.color`)};
  `,
  mainTitle: css`
    color: ${({ theme }) => get(theme, `colors.quartiary.main.color`)};
  `,
  title2: css`
    color: ${({ theme }) => get(theme, `colors.primary.main.color`)};
  `,
  paragraph1: css`
    color: ${({ theme }) => get(theme, `colors.primary.main.color`)};
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) =>
      theme.typographyVariants.smallestException.lineHeight};
  `,
};

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
  ${propToStyle("textAlign")}
  ${propToStyle("marginBottom")}
  ${propToStyle("opacity")}
  ${propToStyle("color")}
  ${propToStyle("margin")} /* ${function (props) {
    console.log("Props, funcao executou");
    return propToStyle("textAlign", props);
  }} */
  /* ${function (props) {
    return {
      textAlign: props.textAlign,
    };
    // return `
    //   text-align: ${props.textAlign};
    // `
  }} */
  /* ${(props) => TextStyleVariantsMap["paragraph1"]} */
`;

export function Text({ tag, variant, children, ...props }) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      // style
      // className
      // e ai vai
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: "span",
  variant: "paragraph1",
};
