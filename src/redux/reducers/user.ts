import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  _id: string;
  username: string;
  email: string;
}

interface UserState {
  currentUser: User | null;
  isFetching: boolean;
  error: boolean;
}

export interface LoginUser {
  username: string;
  password: string;
}

const initialState: UserState = {
  currentUser: null,
  isFetching: false,
  error: false,
};

const cartSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart(state: UserState) {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess(state: UserState, action: PayloadAction<User>) {
      state.currentUser = action.payload;
      state.isFetching = false;
    },
    loginFailure(state: UserState) {
      state.isFetching = false;
      state.error = true;
    },
    logout(state: UserState) {
      Object.assign(state, initialState);
    },
  },
});

export const { loginFailure, loginStart, loginSuccess, logout } = cartSlice.actions;
export const userReducer = cartSlice.reducer;
