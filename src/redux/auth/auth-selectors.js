const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUserMail = state => state.auth.user.email;
const getIsErrorOccured = state => state.auth.showLoginError;
const getIsLoginSuccess = state => state.auth.showLoginSuccess;
const getApiError = state => state.auth.error;

export default {
  getIsAuthenticated,
  getUserMail,
  getIsErrorOccured,
  getIsLoginSuccess,
  getApiError,
};
