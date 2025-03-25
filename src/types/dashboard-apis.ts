import {DashboardUser} from './types';

type GenericResponse = {
  success: boolean;
  message?: string;
};

// login---------------------------------------
export interface LoginReq {
  email: string;
  password: string;
}
export interface LoginRes extends GenericResponse {
  accessToken: string;
  refreshToken: string;
  user: DashboardUser;
}
// logout ---------------------------------------
export type LogoutReq = undefined;
export interface LogoutRes extends GenericResponse {
  message: string;
}
// user self ---------------------------------------
export type UserSelfReq = undefined;
export interface UserSelfRes extends GenericResponse {
  user: DashboardUser;
}
