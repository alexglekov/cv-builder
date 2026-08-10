/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */

import { Roles } from './auth.types'

export const authState = (state: RootState) => state.auth.data
export const role = (state: RootState) => state.auth.data?.role || Roles.NONE
export const isAuthState = (state: RootState) => state.auth.data?.isAuth || false
export const userId = (state: RootState) => state.auth.data?.myUserId

export const isFailed = (state: RootState) => state.auth.isFailed
export const error = (state: RootState) => state.auth.error
export const isLoaded = (state: RootState) => state.auth.isLoaded
export const isLoading = (state: RootState) => state.auth.isLoading
