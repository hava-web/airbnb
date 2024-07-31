import { Link, Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../store';
import { GetIdentity } from '../store/models/account.store';

const Account = () => {
  const identity = useAppSelector(GetIdentity);
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

  return (
    <>
      <nav className='w-full flex justify-center mt-8 gap-2'>
        <Link className={linkClasses('profile')} to={'profile'}>
          My profile
        </Link>
        <Link className={linkClasses('bookings')} to={'bookings'}>
          My Booking
        </Link>
        <Link className={linkClasses('places')} to={'places'}>
          My Accommodations
        </Link>
      </nav>
    </>
  );
};

export default Account;
