import React from 'react';
import { render } from '@testing-library/react';

import UserDetailsForm from './user-details-form';

describe(' UserDetailsForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserDetailsForm />);
    expect(baseElement).toBeTruthy();
  });
});
