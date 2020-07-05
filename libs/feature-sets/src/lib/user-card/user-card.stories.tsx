import React from 'react';
import { UserCard, UserCardProps } from './user-card';
import { text } from '@storybook/addon-knobs';

export default {
  component: UserCard,
  title: 'UserCard'
};

export const primary = () => {
  const props: UserCardProps = {
    name: text('name', 'Smitty Werbenjagermanjensen'),
    description: text('description', normalDescription)
  };

  return <UserCard {...props} />;
};

export const long = () => {
  const props: UserCardProps = {
    name: text('name', 'Smitty Werbenjagermanjensen'),
    description: text('description', longDescription)
  };

  return <UserCard {...props} />;
};

export const short = () => {
  const props: UserCardProps = {
    name: text('name', 'Smitty Werbenjagermanjensen'),
    description: text('description', shortDescrition)
  };

  return <UserCard {...props} />;
};


const longDescription = `ipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.`;

const shortDescrition = 'A';

const normalDescription = 'Lorem ipsum dolor sit amet, consectetur…';


