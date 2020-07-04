import React from 'react';
import { Hero, HeroProps } from './hero';

export default {
  component: Hero,
  title: 'Hero',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: HeroProps = {};

  return <Hero />;
};
