import styled from '@emotion/styled';
import { ThemeDefinition } from '../theme/theme';
import { inset } from '../theme/spacing';

export const UserCardContainer = styled.div<{}, ThemeDefinition>`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colorScheme.background};
  padding: ${inset.XXL.l};
  border-radius: 8px;
`;

export const UserName = styled.h2<{}, ThemeDefinition>`
  font-family: ${props => props.theme.font.fontFamily};
  font-style: ${props => props.theme.font.fontStyle};
  font-weight: 600px;
  color: ${props => props.theme.colorScheme.foreground};
  margin-bottom: ${inset.XXL.s};
`;
