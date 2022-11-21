import * as React from 'react';
import { useUsersRepositories } from '../useUsersRepositories';
import { RepoDetails } from './RepoDetails';

interface UsersRepositoriesProps {
  name: string;
}

export const UsersRepositories = ({ name }: UsersRepositoriesProps) => {
  const { isLoading, isError, data, error } = useUsersRepositories(name);

  if (!name) {
    return null;
  }

  if (isLoading) {
    return <span className=''>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <article>
      <header className='py-6  text-lg'>Repositories for {name}</header>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {data.map(repo => (
          <RepoDetails key={repo.id} repo={repo} />
        ))}
      </div>
    </article>
  );
};
