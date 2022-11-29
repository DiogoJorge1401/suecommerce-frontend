import { Dispatch } from '@reduxjs/toolkit';
import { publicRequest, setAuthorizationToken } from '~/api/axios';
import { loginFailure, loginStart, loginSuccess, LoginUser } from '../reducers/user';

export const login = async (dispatch: Dispatch, user: LoginUser) => {
  dispatch(loginStart());
  try {
    const { data } = await publicRequest.post('/auth/login', user);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { isAdmin, createdAt, updatedAt, token, ...rest } = data;

    dispatch(loginSuccess(rest));

    localStorage.setItem('access_token', token);

    setAuthorizationToken();

    return true;
  } catch (error) {
    dispatch(loginFailure());
    return false;
  }
};
