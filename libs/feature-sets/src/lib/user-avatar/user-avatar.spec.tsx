import React from 'react';
import { render } from '@testing-library/react';

import UserAvatar, { UserAvatarProps } from './user-avatar';

describe(' UserAvatar', () => {
  it('should render successfully', () => {
    const props: UserAvatarProps = { src: `` };
    const { baseElement } = render(<UserAvatar {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
