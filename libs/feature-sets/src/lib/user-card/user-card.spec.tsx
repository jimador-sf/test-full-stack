import React from 'react';
import { render } from '@testing-library/react';
import * as faker from 'faker';

import UserCard, { UserCardProps } from './user-card';

describe(' UserCard', () => {
  it('should render successfully', () => {
    const props: UserCardProps = {
      description: faker.hacker.phrase(),
      name: faker.hacker.abbreviation()
    }
    const { baseElement } = render(<UserCard {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
