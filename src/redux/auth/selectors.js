export const selectIsLoggedIn = state => {
  console.log(state);
  return state.auth.isLoggedIn;
};

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;
