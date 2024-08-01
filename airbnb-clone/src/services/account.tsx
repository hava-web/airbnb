import { IAccountService, LoginFields, RegisterFields } from '../models/account.model';
import http from '../utils/http.client';

const accountServices: IAccountService = {
  Register: async (data: RegisterFields) => {
    return await http.airbnb.post('/register', data);
  },

  Login: async (data: LoginFields) => {
    return await http.airbnb.post('/login', data);
  },

  Fetch: async () => {
    return await http.airbnb.get(`/profile`);
  },
  Logout: async () => {
    return await http.airbnb.post(`/logout`);
  }
};

export default accountServices;
