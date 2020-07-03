import { css } from '@emotion/core';

export type FontSizeBreakPoint = 'sm' | 'med' | 'lg'
export type FontFamily = 'Source Sans Pro'
export type FontStyle = 'normal'
export type FontSize = Record<FontSizeBreakPoint, string>

export type Font = {
  fontFamily: FontFamily;
  fontStyle: FontStyle;
  size: FontSize;
}

export const defaultFont: Font = {
  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  size: {
    sm: '12px',
    med: '14px',
    lg: '16px'
  }
};

export const fontCss = css`
  @font-face{
      font-family: 'Source Sans Pro';
      font-weight: 200;
      font-style: normal;
      font-stretch: normal;
      src: url('/libs/feature-sets/assets/fonts/source-sans-pro/SourceSansPro-ExtraLight.ttf.woff2') format('woff2'),
  }

  @font-face{
      font-family: 'Source Sans Pro';
      font-weight: 200;
      font-style: italic;
      font-stretch: normal;
      src: url('/libs/feature-sets/assets/fonts/source-sans-pro/SourceSansPro-ExtraLightIt.ttf.woff2') format('woff2'),
  }

  @font-face{
      font-family: 'Source Sans Pro';
      font-weight: 300;
      font-style: normal;
      font-stretch: normal;
      src: url('/libs/feature-sets/assets/fonts/source-sans-pro/SourceSansPro-Light.ttf.woff2') format('woff2'),
  }

  @font-face{
      font-family: 'Source Sans Pro';
      font-weight: 300;
      font-style: italic;
      font-stretch: normal;
      src: url('/libs/feature-sets/assets/fonts/source-sans-pro/SourceSansPro-LightIt.ttf.woff2') format('woff2'),
  }

  @font-face{
      font-family: 'Source Sans Pro';
      font-weight: 400;
      font-style: normal;
      font-stretch: normal;
      src: url('/libs/feature-sets/assets/fonts/source-sans-pro/SourceSansPro-Regular.ttf.woff2') format('woff2'),
  }

  @font-face{
      font-family: 'Source Sans Pro';
      font-weight: 400;
      font-style: italic;
      font-stretch: normal;
      src: url('/libs/feature-sets/assets/fonts/source-sans-pro/SourceSansPro-It.ttf.woff2') format('woff2'),
  }

  @font-face{
      font-family: 'Source Sans Pro';
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      src: url('/libs/feature-sets/assets/fonts/source-sans-pro/SourceSansPro-Semibold.ttf.woff2') format('woff2'),
  }

  @font-face{
      font-family: 'Source Sans Pro';
      font-weight: 600;
      font-style: italic;
      font-stretch: normal;
      src: url('/libs/feature-sets/assets/fonts/source-sans-pro/SourceSansPro-SemiboldIt.ttf.woff2') format('woff2'),
  }

  @font-face{
      font-family: 'Source Sans Pro';
      font-weight: 700;
      font-style: normal;
      font-stretch: normal;
      src: url('/libs/feature-sets/assets/fonts/source-sans-pro/SourceSansPro-Bold.ttf.woff2') format('woff2'),
  }

  @font-face{
      font-family: 'Source Sans Pro';
      font-weight: 700;
      font-style: italic;
      font-stretch: normal;
      src: url('/libs/feature-sets/assets/fonts/source-sans-pro/SourceSansPro-BoldIt.ttf.woff2') format('woff2'),
  }

  @font-face{
      font-family: 'Source Sans Pro';
      font-weight: 900;
      font-style: normal;
      font-stretch: normal;
      src: url('/libs/feature-sets/assets/fonts/source-sans-pro/SourceSansPro-Black.ttf.woff2') format('woff2'),
  }

  @font-face{
      font-family: 'Source Sans Pro';
      font-weight: 900;
      font-style: italic;
      font-stretch: normal;
      src: url('/libs/feature-sets/assets/fonts/source-sans-pro/SourceSansPro-BlackIt.ttf.woff2') format('woff2'),
  }
`;

