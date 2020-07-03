import styled from '@emotion/styled';
import { UserAvatarProps } from '@test-full-stack/feature-sets';

export const StyledUserAvatar = styled.div<UserAvatarProps>({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  width: "168px",
  height: "168px",
  cursor: "pointer",
  borderRadius: '50%',
  margin: '44px 116px 124px 116px'
}, props => ({backgroundImage: `url(${props.src})`}));
