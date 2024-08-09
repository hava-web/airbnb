import moment from 'moment';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { useAppDispatch } from './store';
import { FetchUserInformation } from './store/models/account.store';
import { useEffect } from 'react';

moment.locale('vi');

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FetchUserInformation());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
