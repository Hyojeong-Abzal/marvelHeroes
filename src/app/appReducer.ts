import React from 'react'
import { v1 } from 'uuid'

const initialState = {
  selectedCharacter: 'rundom',
}

export const appReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'APP/SET_SELECTED_CHARACTER':
      debugger
      return { ...state, selectedCharacter: action.id }
    default:
      return { ...state }
  }
}

export type InitialStateType = typeof initialState

export const setSelectedCharacter = (id: string) =>
  ({ type: 'APP/SET_SELECTED_CHARACTER', id } as const)

export type setSelectedCharacterType = ReturnType<typeof setSelectedCharacter>

type ActionsType = setSelectedCharacterType

