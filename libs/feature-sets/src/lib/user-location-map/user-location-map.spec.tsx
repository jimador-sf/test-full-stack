import React from 'react';
import { render } from '@testing-library/react';

import UserLocationMap from './user-location-map';

describe(' UserLocationMap', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserLocationMap />);
    expect(baseElement).toBeTruthy();
  });
});
