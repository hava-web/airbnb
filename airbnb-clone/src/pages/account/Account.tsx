import { Link, Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { GetIdentity } from '../../store/models/account.store';

import React from 'react';
import { Profile } from '../../components/lazy';
import { IAccountURL } from '../../models/account.model';
import Place from './accommodation/place';
import Booking from './booking/booking';
import CustomSuspense from '../../components/suspense';

const Account = () => {
  const identity = useAppSelector(GetIdentity);
  let { subPage } = useParams<{ subPage: IAccountURL }>();
  const ComponentPage: Record<IAccountURL, React.ReactNode> = {
    profile: <Profile identity={identity} />,
    places: <Place />,
    bookings: <Booking />,
  };

  if (subPage === undefined) subPage = 'profile';

  if (!identity.isLoading) return 'Loading...';

  if (!identity.token) return <Navigate to={'/login'} />;

  const linkClasses = (type: string | null) => {
    let classes = 'inline-flex gap-1 py-2 px-6 rounded-full';
    if (type === subPage) {
      classes += ' bg-primary text-white';
    } else {
      classes += ' bg-gray-200';
    }

    return classes;
  };

  return (
    <>
      <nav className='w-full flex justify-center mt-8 gap-2 mb-8'>
        <Link className={linkClasses('profile')} to={'profile'}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='size-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
            />
          </svg>
          My profile
        </Link>
        <Link className={linkClasses('bookings')} to={'bookings'}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='size-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
            />
          </svg>
          My Booking
        </Link>
        <Link className={linkClasses('places')} to={'places'}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='size-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z'
            />
          </svg>
          My Accommodations
        </Link>
      </nav>
      {subPage !== undefined && <CustomSuspense fallback={<>...loading</>}>{ComponentPage[subPage]}</CustomSuspense>}
    </>
  );
};

export default Account;
