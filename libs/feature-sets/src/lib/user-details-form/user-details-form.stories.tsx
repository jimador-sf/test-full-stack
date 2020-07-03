import React from 'react';
import { UserDetailsForm, UserDetailsFormProps } from './user-details-form';

export default {
  component: UserDetailsForm,
  title: 'UserDetailsForm',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: UserDetailsFormProps = {};

  return <UserDetailsForm />;
};
