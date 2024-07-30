import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import accountServices from '../services/account';
import { AccountAction, FetchUserInformation } from '../store/models/account.store';
import { useAppDispatch } from '../store';

const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handlerInfo = () => {
    dispatch(FetchUserInformation());
  };

  const onSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      await accountServices
        .Login({ email, password })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((res: any) => {
          dispatch(AccountAction.GetUserInfo(res?.data));
          handlerInfo();
        })
        .catch((error) => {
          console.log(error);
        });
      setIsLogin(true);
    } catch (error) {
      alert('Login failed');
    }
  };

  if (isLogin) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-3xl text-center mb-4'>Login</h1>
        <form className='max-w-md mx-auto' onSubmit={onSubmit}>
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
          <button className='primary'>Login</button>
          <div className='text-center py-2 text-gray-500'>
            Don't have an account yet ?
            <Link className='underline text-black' to={'/register'}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
