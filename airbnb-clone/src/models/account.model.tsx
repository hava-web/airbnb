export interface IAccountService {
  /*Login function */
  Register: (data: RegisterFields) => void;
  Login: (data: LoginFields) => void;
}

export type RegisterFields = {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
};

export type LoginFields = Omit<RegisterFields, "name">;
