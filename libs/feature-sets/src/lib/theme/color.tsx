

/**
 * Primary Theme Colors
 */
export const colors = ['#000000', '#F8F8F8'] as const
export const [dark, light] = colors
export const white = '#FFFFFF'
/**
 * Grey colors
 */
export const greyColor = {
  // Pure greys
  grey05: '#f2f2f2',
  grey10: '#1a1a1a',
  grey20: '#333333',
  grey30: '#4c4c4c',
  grey40: '#666666',
  grey50: '#808080',
  grey60: '#999999',
  grey70: '#cccccc',
  grey80: '#d9d9d9',
  grey90: '#e5e5e5',
  grey98: '#f9f9f9'
};

/**
 * Grey color type
 */
export type GreyColor = typeof greyColor
export const getForeground = (backgroundColor: typeof colors[number]) => {
  return backgroundColor === '#F8F8F8' ? '#000000' : '#F8F8F8'
}
