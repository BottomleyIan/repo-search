import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { RepoListZod } from '../Types';
import { RepoDetails } from './RepoDetails';

interface UsersRepositoriesProps {
  name: string;
}

const getRepositories = (name: string) =>
  fetch(`https://api.github.com/users/${name}/repos`)
    .then(response => response.json())
    .then(data => RepoListZod.parse(data))
    .then(repos => repos.filter(repo => !repo.private)); // filter out private repos. Not checked if private are returned by the API

export const UsersRepositories = ({ name }: UsersRepositoriesProps) => {
  const enabled = !!name;

  const { isLoading, isError, data, error } = useQuery({ queryKey: ['repos'], queryFn: () => getRepositories(name), enabled });

  if (!enabled) {
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
