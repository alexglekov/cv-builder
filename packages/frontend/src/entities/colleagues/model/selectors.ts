/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */

export const colleaguesState = (state: RootState) => state.colleagues.data
export const filtersState = (state: RootState) => state.colleagues.filters
export const isFailed = (state: RootState) => state.colleagues.isFailed
export const error = (state: RootState) => state.colleagues.error
export const isLoaded = (state: RootState) => state.colleagues.isLoaded
export const isLoading = (state: RootState) => state.colleagues.isLoading
