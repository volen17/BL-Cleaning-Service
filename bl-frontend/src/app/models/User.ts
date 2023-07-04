export interface User {
  email: string;
  password: string;
  confirmedPassword: string;
  firstName: string;
  lastName: string;
  role: string;
  team: string;
}

export interface LoginUser {
  email: string;
  password: string;
}
