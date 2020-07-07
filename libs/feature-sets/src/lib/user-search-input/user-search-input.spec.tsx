import React from 'react';
import { render } from '@testing-library/react';

import UserSearchInput from './user-search-input';

describe(' UserSearchInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserSearchInput/>);
    expect(baseElement).toBeTruthy();
  });
});
