/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */

export const storageState = (state: RootState) => state.storage.data
export const isFailed = (state: RootState) => state.storage.isFailed
export const error = (state: RootState) => state.storage.error
export const isLoaded = (state: RootState) => state.storage.isLoaded
export const isLoading = (state: RootState) => state.storage.isLoading
