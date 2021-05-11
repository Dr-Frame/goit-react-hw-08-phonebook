const getIsAuthenticated = state => state.auth.token;
const getUserMail = state => state.auth.user.email;
const getIsErrorOccured = state => state.auth.showError;

export default {
  getIsAuthenticated,
  getUserMail,
  getIsErrorOccured,
};
