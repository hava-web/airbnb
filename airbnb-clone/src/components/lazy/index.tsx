import { FC, lazy } from 'react';
import { IProfileType } from '../../pages/account/profile/profile';

const IndexPage = lazy(() => import('../../pages/IndexPage'));

const LoginPage = lazy(() => import('../../pages/LoginPage'));

const RegisterPage = lazy(() => import('../../pages/RegisterPage'));

const Account = lazy(() => import('../../pages/account/Account'));

const Profile: FC<IProfileType> = lazy(() => import('../../pages/account/profile/profile'));

export { IndexPage, LoginPage, RegisterPage, Account, Profile };