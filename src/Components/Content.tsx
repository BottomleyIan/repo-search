import * as React from 'react';
import { UserForm } from './UserForm';
import { UsersRepositories } from './UsersRepositories';

export const Content = () => {
  const [name, setName] = React.useState('');
  return (
    <div className='max-w-7xl mx-auto p-4'>
      <UserForm setName={setName} />
      <UsersRepositories name={name} />
    </div>
  );
};
