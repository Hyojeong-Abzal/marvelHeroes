import React from 'react'

export const appInitialState = {
  selectedItemId: '',
  status: 'normal' as RequestStatusType,
  error: null as string | null,
}

export const appReducer = (
  state: AppInitialStateType = appInitialState,
  action: ActionType
): AppInitialStateType => {
  switch (action.type) {
    case 'APP/SET_SELECTED_ITEM':
      return { ...state, selectedItemId: action.itemId }
    case 'APP/SET-STATUS':
      return { ...state, status: action.status }
    case 'APP/SET_ERROR':
      return { ...state, error: action.error }
    default:
      return state
  }
}

export const setSelectedItemId = (itemId: string) =>
  ({ type: 'APP/SET_SELECTED_ITEM', itemId } as const)

export const setAppStatus = (status: RequestStatusType) =>
  ({ type: 'APP/SET-STATUS', status } as const)

export const setAppError = (error: ErrorType) =>
  ({ type: 'APP/SET_ERROR', error } as const)

// types
export type AppInitialStateType = typeof appInitialState
export type ActionType =
  | SetSelectedItemType
  | SetAppStatusType
  | SetAppErrorType

export type RequestStatusType = 'normal' | 'loading' | 'succeeded' | 'failed'
export type ErrorType = string | null

export type SetAppErrorType = ReturnType<typeof setAppError>
export type SetAppStatusType = ReturnType<typeof setAppStatus>
export type SetSelectedItemType = ReturnType<typeof setSelectedItemId>
