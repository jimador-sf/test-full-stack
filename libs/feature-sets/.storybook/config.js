import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { GlobalStyles } from '../src/lib/styles/global';
import { ModalProvider } from 'react-modal-hook';


addDecorator (withKnobs);
addDecorator (storyFn =>
  <>
      <GlobalStyles/>
      {storyFn ()}
  </>);
configure (require.context ('../src/lib', true, /\.stories\.([jt])sx?$/), module);
