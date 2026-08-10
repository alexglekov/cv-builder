/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */

export const projectsState = (state: RootState) => state.projects.data
export const filtersState = (state: RootState) => state.projects.filters
export const isFailed = (state: RootState) => state.projects.isFailed
export const error = (state: RootState) => state.projects.error
export const isLoaded = (state: RootState) => state.projects.isLoaded
export const isLoading = (state: RootState) => state.projects.isLoading
