import { z } from 'zod';

export const RepoZod = z.object({
  description: z.union([z.string(), z.null()]),
  html_url: z.string(),
  id: z.number(),
  language: z.union([z.string(), z.null()]),
  name: z.string(),
  private: z.boolean(),
});

export const RepoListZod = z.array(RepoZod);
export type Repo = z.infer<typeof RepoZod>;
export type RepoList = z.infer<typeof RepoListZod>;
