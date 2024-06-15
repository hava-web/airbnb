import moment from 'moment';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';

moment.locale('vi');

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
