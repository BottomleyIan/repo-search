import * as React from 'react';
import { Repo } from '../Types';

interface RepoDetailsProps {
  repo: Repo;
}
export const RepoDetails = ({ repo }: RepoDetailsProps) => {
  return (
    <div className='flex flex-col gap-2 bg-slate-800 rounded-sm p-4'>
      <div className='flex flex-row justify-between items-center'>
        <a href={repo.html_url} className='text-blue-400'>
          {repo.name}
        </a>
        <div className='text-sm'>{repo.language}</div>
      </div>
      <div className='text-slate-300 text-sm'>{repo.description}</div>
    </div>
  );
};
