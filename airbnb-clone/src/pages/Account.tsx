import { Link, Navigate } from "react-router-dom";
import { useAppSelector } from "../store";
import { GetIdentity } from "../store/models/account.store";

const Account = () => {
  const identity = useAppSelector(GetIdentity);

  if(!identity.isLoading) return 'Loading...';

  if(!identity.token) return <Navigate to={'/login'} />;
  

  return (
    <>
      <nav className="w-full flex justify-center mt-8 gap-2">
        <Link className="py-2 px-6 bg-primary text-white rounded-full" to={''}>My profile</Link>
        <Link className="py-2 px-6" to={'bookings'}>My Booking</Link>
        <Link className="py-2 px-6" to={'places'}>My Accomodations</Link>
      </nav>
    </>
  );
};

export default Account;