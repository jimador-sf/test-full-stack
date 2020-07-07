import React from 'react';
import { render } from '@testing-library/react';

import { UserList } from './user-list';
import { usersGen } from '../util/user-faker';
import { ModalProvider } from 'react-modal-hook';

describe(' UserList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModalProvider><UserList users={usersGen()}/></ModalProvider>);
    expect(baseElement).toBeTruthy();
  });
});
