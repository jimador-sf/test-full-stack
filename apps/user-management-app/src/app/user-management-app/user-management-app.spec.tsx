import React from 'react';
import { render } from '@testing-library/react';

import UserManagementApp from './user-management-app';

describe(' UserManagementApp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserManagementApp />);
    expect(baseElement).toBeTruthy();
  });
});