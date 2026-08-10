/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */

export const userState = (state: RootState) => state.user.data
export const isFailed = (state: RootState) => state.user.isFailed
export const error = (state: RootState) => state.user.error
export const isLoaded = (state: RootState) => state.user.isLoaded
export const isLoading = (state: RootState) => state.user.isLoading
