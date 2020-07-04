import React from 'react';

import styled from '@emotion/styled';
import { Cell, Grid } from '../util/grid';
import { whiteSmoke } from '../styles/global';
import UserLoadMoreButton from '../user-load-more-button/user-load-more-button';

/* eslint-disable-next-line */
export interface FooterProps {
}

const StyledFooter = styled.div({
  background: whiteSmoke
});

const BtnWrapper = styled.div`
  display: flex;
  align-items: space-evenly;
  justify-content: space-evenly;
`;

export const Footer = (props: FooterProps) => {
  return (
    <StyledFooter>
      <Grid justifyContent={'space-evenly'} alignContent={'space-evenly'} columns={3} row={1}>
        <Cell left={2} top={2}>
          <BtnWrapper>
            <UserLoadMoreButton>Load More</UserLoadMoreButton>
          </BtnWrapper>
        </Cell>
      </Grid>
    </StyledFooter>
  );
};

export default Footer;
