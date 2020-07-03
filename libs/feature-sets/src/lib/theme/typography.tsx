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
    lg: '16px',
  },
};
