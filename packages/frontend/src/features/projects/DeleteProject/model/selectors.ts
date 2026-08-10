/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */

export const isFailed = (state: RootState) => state.deleteProject.isFailed
export const error = (state: RootState) => state.deleteProject.error
export const isLoaded = (state: RootState) => state.deleteProject.isLoaded
export const isLoading = (state: RootState) => state.deleteProject.isLoading
