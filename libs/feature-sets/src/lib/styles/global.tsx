import React from 'react';
import { Global, css } from '@emotion/core';

export const [black, whiteSmoke, white] = ['#000000', '#F8F8F8', '#FFFFFF'] as const

const fontCss = css`
  @font-face{
      font-family: 'Source Sans Pro';
      font-style: normal;
      src: url('/libs/feature-sets/assets/fonts/source-sans-pro/SourceSansPro-Light.ttf.woff2') format('woff2'),
  }
`;

const globalCss = css`
  html * {
    font-family: Source Sans Pro, sans-serif;
  }

  body {
    background-color: ${whiteSmoke};
  }
`;

export const GlobalStyles = () => (<Global styles={[fontCss, globalCss]}/>);
