import React from 'react';
import { render } from '@testing-library/react';

import UserEditModal from './user-edit-modal';
import { usersGen } from '../util/user-faker';

describe(' UserEditModal', () => {
  const noop = jest.fn;
  it('should render successfully', () => {
    const { baseElement } = render(<UserEditModal user={usersGen(1)[0]} cancelFn={noop} submitFn={noop}/>);
    expect(baseElement).toBeTruthy();
  });
});
