import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';
import { Link } from 'react-router-dom';
import accountServices from '../services/account';

const RegisterPage = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onSubmit: FormEventHandler = (e: FormEvent) => {
    e.preventDefault();
    accountServices.Login({ name, email, password });
  };

  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-3xl text-center mb-4'>Register</h1>
        <form className='max-w-md mx-auto' onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Joe Doe'
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          />
          <input
            type='email'
            placeholder='your@email.com'
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='password'
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <button className='primary'>Register</button>
          <div className='text-center py-2 text-gray-500'>
            Already a member ?
            <Link className='underline text-black' to={'/login'}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
