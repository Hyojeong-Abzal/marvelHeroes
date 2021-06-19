import React from 'react'

export const appInitialState = {
  selectedItemId: '',
}

export const setSelectedItemId = (itemId: string) =>
  ({ type: 'APP/SET_SELECTED_ITEM', itemId } as const)

export const appReducer = (
  state: AppInitialStateType = appInitialState,
  action: ActionType
): AppInitialStateType => {
  switch (action.type) {
    case 'APP/SET_SELECTED_ITEM':
      return { ...state, selectedItemId: action.itemId }
    default:
      return state
  }
}

// types

export type AppInitialStateType = typeof appInitialState
export type ActionType = SetSelectedItemType
export type SetSelectedItemType = ReturnType<typeof setSelectedItemId>
