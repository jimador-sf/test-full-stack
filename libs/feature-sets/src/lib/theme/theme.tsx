import { Font, defaultFont } from './typography';
import * as Color from './color';
import { getForeground } from './color';

export type ThemeName = 'light' | 'dark'

export type ThemeColorScheme = {
  foreground: string;
  background: string;
}

export type Breakpoints = typeof defaultBreakpoints

export const defaultBreakpoints = {
  xs: 0,
  s: 375,
  m: 768,
  l: 1024,
  xl: 1440,
  xxl: 1920
};

export type ThemeDefinition = {
  name: ThemeName;
  breakpoints: Breakpoints;
  font: Font;
  colorScheme: ThemeColorScheme;
}

const defineDefaultTheme = (name: ThemeName): ThemeDefinition => {
  const background = Color[name];
  const foreground = getForeground(background);
  const colorScheme = { foreground , background };

  return {
    name,
    font: defaultFont,
    breakpoints: defaultBreakpoints,
    colorScheme
  };
};

const lightTheme = defineDefaultTheme('light');
const darkTheme = defineDefaultTheme('dark');

export const defaultThemes = [lightTheme, darkTheme] as const;
