import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FeatureSetsProps {}

const StyledFeatureSets = styled.div`
  color: pink;
`;

export const FeatureSets = (props: FeatureSetsProps) => {
  return (
    <StyledFeatureSets>
      <h1>Welcome to feature-sets!</h1>
    </StyledFeatureSets>
  );
};

export default FeatureSets;
