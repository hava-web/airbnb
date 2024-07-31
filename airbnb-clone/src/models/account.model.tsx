export interface IAccountService {
  /*Login function */
  Register: (data: RegisterFields) => void;
  Login: (data: LoginFields) => Promise<never>;
  Fetch: () => Promise<never>;
}

export type RegisterFields = {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
};

export type LoginFields = Omit<RegisterFields, 'name'>;

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
