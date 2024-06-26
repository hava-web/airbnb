export interface IAccountService {
  /*Login function */
  Login: (data: RegisterFields) => void;
}

export type RegisterFields = {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
};
