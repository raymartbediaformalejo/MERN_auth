export type TRegister = {
  name: string;
  email: string;
  password: string;
};

export type TUpdate = {
  _id?: string | number;
  name?: string;
  email?: string;
  password?: string;
};

export type TLogin = {
  email: string;
  password: string;
};
