import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { GlobalStyles } from '../src/lib/styles/global';

addDecorator(withKnobs);
addDecorator(style => <><GlobalStyles />{style()}</>);
configure(require.context('../src/lib', true, /\.stories\.([jt])sx?$/), module);
