export type TUserInfo = {
  _id: string | number;
  name: string;
  email: string;
};

export type TAuthState = {
  userInfo: TUserInfo | null;
};
