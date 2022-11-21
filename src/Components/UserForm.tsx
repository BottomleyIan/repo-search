import * as React from 'react';
import { useForm } from 'react-hook-form';

interface UserFormProps {
  setName: (name: string) => void;
}

export const UserForm = ({ setName }: UserFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => setName(data.name);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
      <label htmlFor='name'>User or Organisation</label>
      <div className='flex flex-col sm:flex-row gap-2'>
        <input id='name' className='text-slate-900 p-1 rounded-sm sm:grow' defaultValue='' {...register('name', { required: true })} />

        <input type='submit' className='bg-green-800 px-4 py-1 text-slate-50 rounded-sm border-0' value='Search' />
      </div>
      {errors.name && <span className='rounded-md bg-red-900 py-2 px-4 text-sm'>A user or organisation name is required!</span>}
    </form>
  );
};
