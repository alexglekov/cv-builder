/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */

export const meState = (state: RootState) => state.me.data
export const isFailed = (state: RootState) => state.me.isFailed
export const error = (state: RootState) => state.me.error
export const isLoaded = (state: RootState) => state.me.isLoaded
export const isLoading = (state: RootState) => state.me.isLoading
