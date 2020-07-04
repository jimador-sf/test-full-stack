import React from 'react';

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface HeroProps {}

const StyledHero = styled.div`
  color: pink;
`;

export const Hero = (props: HeroProps) => {
  return (
    <StyledHero>
      <h1>Welcome to Hero!</h1>
    </StyledHero>
  );
};

export default Hero;
