/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */

export const vacanciesState = (state: RootState) => state.vacancies.data
export const isFailed = (state: RootState) => state.vacancies.isFailed
export const error = (state: RootState) => state.vacancies.error
export const isLoaded = (state: RootState) => state.vacancies.isLoaded
export const isLoading = (state: RootState) => state.vacancies.isLoading
