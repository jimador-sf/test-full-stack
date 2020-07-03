import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withThemesProvider } from 'storybook-addon-emotion-theme';
import { defaultThemes } from '../src/lib/theme/theme';

addDecorator(withKnobs);
addDecorator(withThemesProvider(defaultThemes));
configure(require.context('../src/lib', true, /\.stories\.(j|t)sx?$/), module);
