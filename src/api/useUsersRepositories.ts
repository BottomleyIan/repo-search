import { useQuery } from '@tanstack/react-query';
import { RepoListZod } from '../Types';

const getRepositories = (name: string) =>
  fetch(`https://api.github.com/users/${name}/repos`)
    .then(response => response.json())
    .then(data => RepoListZod.parse(data))
    .then(repos => repos.filter(repo => !repo.private)); // filter out private repos. Not checked if private are returned by the API

export const useUsersRepositories = (name: string) => {
  const enabled = !!name;
  return useQuery({ queryKey: ['repos', name], queryFn: () => getRepositories(name), enabled });
};
