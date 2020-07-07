import React from 'react';
import { render } from '@testing-library/react';

import UserCard, { UserCardProps } from './user-card';
import { usersGen } from '../util/user-faker';
import { ModalProvider } from 'react-modal-hook/dist';

describe(' UserCard', () => {
  it('should render successfully', () => {
    const props: UserCardProps = {
      user: usersGen()[0],
      imageSrc: 'random/url'
    };
    const { baseElement } = render(<ModalProvider><UserCard {...props} /></ModalProvider>);
    expect(baseElement).toBeTruthy();
  });
});
