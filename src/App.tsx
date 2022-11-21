import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';
import { Content } from './Components/Content';
import { Title } from './Components/Title';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='w-full min-h-screen bg-slate-900 text-slate-50'>
        <Title />
        <Content />
      </div>
    </QueryClientProvider>
  );
}
