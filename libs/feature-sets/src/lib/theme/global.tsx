import React from 'react';
import { Global, css } from '@emotion/core';
import { fontCss } from './typography';


const globalCss = css`
  html * {
    font-family: Source Sans Pro, sans-serif;
  }
`;

export const GlobalStyles = () => (<Global styles={[fontCss, globalCss]}/>);
