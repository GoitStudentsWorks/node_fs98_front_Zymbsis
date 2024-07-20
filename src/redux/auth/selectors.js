// export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsLoggedIn = state => Boolean(state.auth.token);

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectLoading = state => state.auth.loading;

export const selectError = state => state.auth.error;
