/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */

export const languagesState = (state: RootState) => state.utility.languages.data
export const filtersState = (state: RootState) => state.utility.languages.filters
export const isFailed = (state: RootState) => state.utility.languages.isFailed
export const error = (state: RootState) => state.utility.languages.error
export const isLoaded = (state: RootState) => state.utility.languages.isLoaded
export const isLoading = (state: RootState) => state.utility.languages.isLoading
