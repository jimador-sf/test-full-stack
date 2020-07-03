import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withThemesProvider } from 'storybook-addon-emotion-theme';
import { defaultThemes } from '../src/lib/theme/theme';
import React from 'react';
import { GlobalStyles } from '../src/lib/theme/global';

addDecorator(withKnobs);
addDecorator(withThemesProvider(defaultThemes));
addDecorator(style => <><GlobalStyles />{style()}</>);
configure(require.context('../src/lib', true, /\.stories\.(j|t)sx?$/), module);
