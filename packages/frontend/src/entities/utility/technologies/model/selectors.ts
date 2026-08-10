/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */

export const technologiesState = (state: RootState) => state.utility.technologies.data
export const filtersState = (state: RootState) => state.utility.technologies.filters
export const isFailed = (state: RootState) => state.utility.technologies.isFailed
export const error = (state: RootState) => state.utility.technologies.error
export const isLoaded = (state: RootState) => state.utility.technologies.isLoaded
export const isLoading = (state: RootState) => state.utility.technologies.isLoading
