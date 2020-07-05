import styled from '@emotion/styled';
import { white } from '../styles/global';

const shadow = {
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1);'
}

export const StyledUserCard = styled.div({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: `${white}`,
  borderRadius: '8px',
  width: '400px',
  height: '336px',
  '&:hover': shadow,
  '&:focus': shadow,
});

export const UserName = styled.div({
  position: 'absolute',
  width: '336px',
  height: '28px',

  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '21px',
  lineHeight: '26px',

  display: 'flex',
  alignItems: 'center',

  margin: '240px 32px 68px 32px'
});

export const Description = styled.div({
  position: 'absolute',
  width: '336px',
  height: '20px',

  fontFamily: 'Source Sans Pro',
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: '16px',
  lineHeight: '20px',

  display: 'flex',
  alignItems: 'center',

  margin: '276px 32px 40px 32px',

});


export const Truncate = styled.div({
  flex: 1,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fitContent: 'min(max-content, max(min-content, fill-available))'
})
