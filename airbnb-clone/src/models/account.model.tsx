export interface IAccountService {
  /*Login function */
  Register: (data: RegisterFields) => void;
  Login: (data: Omit<RegisterFields, 'name'>) => Promise<never>;
  Fetch: () => Promise<never>;
  Logout: () => Promise<never>;
}

export type RegisterFields = {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
};


export type IAccountInitialState = {
  token: string | undefined;
  name: string;
  email: string;
  isAuthorized?: boolean;
  isLoading?: boolean;
};

export type ResponseAccountResult = Omit<IAccountInitialState, 'token'> & {
  password?: string;
  id?: string;
};


export type IAccountURL = 'profile' | 'bookings' | 'places';

