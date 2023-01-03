import styled, { css } from "styled-components"
import { TypeScale } from "../../Css-Styled/Typography"
import { applyStyleModifiers } from "styled-components-modifiers"

const BUTTON_MODIFIERS = {
  small: () => `
      font-size: ${TypeScale.paragraph};
      padding: 6px 12px;
   `,
  meddium: () => `
      padding: 12px 24px;
   `,
  large: () => `
      font-size:${TypeScale.paragraph};
      padding: 29px 74px;
  `,
};



const Button = styled.button`
  border: none;
  min-width: 100px;
  cursor: pointer;
  outline : none;
  
`;

const NextBtn = styled(Button)`
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const PrimaryBtn = styled(Button)`
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const SecondaryBtn = styled(Button)`
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const TertiaryBtn = styled(Button)`
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const DarkThemeBtn = styled(Button)`
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

const AuthButton = styled(Button)`
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export {
  PrimaryBtn,
  SecondaryBtn,
  DarkThemeBtn,
  TertiaryBtn,
  AuthButton,
  NextBtn,
};