import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import CustomSuspense from '../components/suspense';
const Header = lazy(() => import('../components/header/index'));

const PageLayout = () => {
  return (
    <div className='p-4 flex flex-col min-h-screen'>
      <Header />
      <CustomSuspense fallback={<div>Loading...</div>}>
        <Outlet />
      </CustomSuspense>
    </div>
  );
};

export default PageLayout;
