/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */

export const professionalSkillsState = (state: RootState) => state.professionalSkills.data
export const isFailed = (state: RootState) => state.professionalSkills.isFailed
export const error = (state: RootState) => state.professionalSkills.error
export const isLoaded = (state: RootState) => state.professionalSkills.isLoaded
export const isLoading = (state: RootState) => state.professionalSkills.isLoading
