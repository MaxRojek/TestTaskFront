import { UserInfo } from "./userInfo";

export interface LoginUserResponse {
  user: UserInfo;
  expiresIn: string;
  access_token: string;
}