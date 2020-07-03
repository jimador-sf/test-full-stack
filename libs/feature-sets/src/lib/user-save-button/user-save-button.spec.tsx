import React from 'react';
import { render } from '@testing-library/react';

import UserSaveButton from './user-save-button';

describe(' UserSaveButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserSaveButton />);
    expect(baseElement).toBeTruthy();
  });
});
