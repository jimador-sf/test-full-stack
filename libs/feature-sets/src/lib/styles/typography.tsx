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
  fontStyle: 'normal'
};



