export type UserLogIn = {
  readonly email: string;
  readonly password: string;
};

export type UserSignIn = {
  readonly email: string;
  readonly password: string;
  readonly confirmPassword: string;
};
