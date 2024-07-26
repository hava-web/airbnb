import { IAccountService, LoginFields, RegisterFields } from '../models/account.model';
import http from '../utils/http.client';

const accountServices: IAccountService = {
  Register: async (data : RegisterFields) => {
    await http.airbnb.post('/register', data);
  },

  Login: async (data: LoginFields) => {
    await http.airbnb.post('/login',data);
  },

  Fetch: async () =>{
    
  }
};

export default accountServices;
