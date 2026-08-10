/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */

export const isFailed = (state: RootState) => state.archiveProject.isFailed
export const error = (state: RootState) => state.archiveProject.error
export const isLoaded = (state: RootState) => state.archiveProject.isLoaded
export const isLoading = (state: RootState) => state.archiveProject.isLoading
