import React from 'react';
import { render } from '@testing-library/react';

import UserEditModal from './user-edit-modal';

describe(' UserEditModal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserEditModal />);
    expect(baseElement).toBeTruthy();
  });
});
