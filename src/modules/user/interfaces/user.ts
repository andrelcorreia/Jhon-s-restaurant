export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  active: boolean;
  registed_at: Date;
}

export interface createUser {
  name: string;
  email: string;
  password: string;
}

export interface updateUser {
  id: string;
  name: string;
}

export interface inactiveUser {
  id: string;
  active: boolean;
}
