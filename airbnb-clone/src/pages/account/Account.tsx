import { Link, Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { GetIdentity } from '../../store/models/account.store';

import { useState } from 'react';
import Profile from './profile/profile';

const Account = () => {
  const identity = useAppSelector(GetIdentity);
  const [redirect, setRedirect] = useState<string | null>(null);
  let { subPage } = useParams();

  if (subPage === undefined) {
    subPage = 'profile';
  }

  if (!identity.isLoading) return 'Loading...';

  if (!identity.token) return <Navigate to={'/login'} />;

  const linkClasses = (type: string | null) => {
    let classes = 'py-2 px-6';
    if (type === subPage) {
      classes += ' bg-primary text-white rounded-full';
    }

    return classes;
  };

  if (redirect) {
    return <Navigate to={'/'} />;
  }


  return (
    <>
      <nav className='w-full flex justify-center mt-8 gap-2 mb-8'>
        <Link className={linkClasses('profile')} to={''}>
          My profile
        </Link>
        <Link className={linkClasses('bookings')} to={'bookings'}>
          My Booking
        </Link>
        <Link className={linkClasses('places')} to={'places'}>
          My Accommodations
        </Link>
      </nav>
      {
        subPage === 'profile' && (
          <Profile
            identity={identity}
            setRedirect={setRedirect}
          />
        )
      }

      {

      }
    </>
  );
};

export default Account;
