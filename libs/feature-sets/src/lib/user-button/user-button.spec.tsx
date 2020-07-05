import React from 'react';
import { render } from '@testing-library/react';

import UserButton, { UserButtonProps } from './user-button';

describe(' UserButton', () => {
  it('should render successfully', () => {
    const action = jest.fn;
    const props: UserButtonProps = { action, buttonText: 'apple' };
    const { baseElement } = render(<UserButton {...props}/>);
    expect(baseElement).toBeTruthy();
  });
});
