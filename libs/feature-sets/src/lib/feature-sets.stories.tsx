import React from 'react';
import { FeatureSets, FeatureSetsProps } from './feature-sets';

export default {
  component: FeatureSets,
  title: 'FeatureSets',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: FeatureSetsProps = {};

  return <FeatureSets />;
};
