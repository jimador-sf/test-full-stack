import { css } from '@emotion/core';

export type FontSizeBreakPoint = 'sm' | 'med' | 'lg'
export type FontFamily = 'Source Sans Pro'
export type FontStyle = 'normal'
export type FontSize = Record<FontSizeBreakPoint, string>

export type Font = {
  fontFamily: FontFamily;
  fontStyle: FontStyle;
}

export const defaultFont: Font = {
  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
};

export const fontCss = css`

  @font-face{
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-stretch: normal;
      src: url('/libs/feature-sets/assets/fonts/source-sans-pro/SourceSansPro-Regular.ttf.woff2') format('woff2'),
  }

`;

