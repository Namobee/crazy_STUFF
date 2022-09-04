import { theme } from 'config'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.neutral[200]};
    font-family: ${theme.font.family};
    overflow-x: hidden;
    color: ${theme.colors.neutr