import { IAccountService, RegisterFields } from '../models/account.model';
import http from '../utils/http.client';

const accountServices: IAccountService = {
  Register: ({ name, email, password }: RegisterFields) => {
    http.airbnb.post('/register', {
      name,
      email,
      password,
    });
  },
};

export default accountServices;
