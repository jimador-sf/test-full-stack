import React from 'react';
import { render } from '@testing-library/react';

import UserEditButton from './user-edit-button';

describe(' UserEditButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserEditButton />);
    expect(baseElement).toBeTruthy();
  });
});
