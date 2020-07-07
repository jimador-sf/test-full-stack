import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { GlobalStyles } from '../src/lib/styles/global';


addDecorator (withKnobs);
addDecorator (storyFn =>
  <>
    <GlobalStyles/>
    {storyFn ()}
  </>);
configure (require.context ('../src/lib', true, /\.stories\.([jt])sx?$/), module);
