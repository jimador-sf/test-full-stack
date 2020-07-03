import React from 'react';
import { render } from '@testing-library/react';

import UserLoadMoreButton from './user-load-more-button';

describe(' UserLoadMoreButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserLoadMoreButton />);
    expect(baseElement).toBeTruthy();
  });
});
