export interface IAccountService {
  /*Login function */
  Register: (data: RegisterFields) => void;
  Login: (data: LoginFields) => Promise<unknown>;
  Fetch: () => void;
}

export type RegisterFields = {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
};

export type LoginFields = Omit<RegisterFields, 'name'>;

export type IAccountInitialState = {
  token: string;
  name: string;
  email: string;
};
