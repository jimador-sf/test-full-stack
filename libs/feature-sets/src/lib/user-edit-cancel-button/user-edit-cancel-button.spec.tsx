import React from 'react';
import { render } from '@testing-library/react';

import UserEditCancelButton from './user-edit-cancel-button';

describe(' UserEditCancelButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserEditCancelButton />);
    expect(baseElement).toBeTruthy();
  });
});
