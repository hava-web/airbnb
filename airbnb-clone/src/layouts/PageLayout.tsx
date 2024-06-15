import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
const Header = lazy(() => import('../components/header/index'));

const PageLayout = () => {
  return (
    <div className='p-4 flex flex-col min-h-screen'>
      <Header />
      <Outlet />
    </div>
  );
};

export default PageLayout;
