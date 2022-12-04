export const selectIsLoggedIn = state => {
  return state.auth.isLoggedIn;
};

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsLoading = state => state.auth.isLoading;
