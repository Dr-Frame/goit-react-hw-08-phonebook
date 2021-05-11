import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authActions from './auth-actions';

const initialUserState = {
  name: null,
  mail: null,
};

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer('', {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
});

const showError = createReducer(false, {
  [authActions.loginError]: () => true,
  [authActions.loginSuccess]: () => false,
});

/* const loading = createReducer(); */

export default combineReducers({
  user,
  token,
  error,
  showError,
});
