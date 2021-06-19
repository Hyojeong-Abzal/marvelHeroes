import React from 'react'
import {
  AppInitialStateType,
  appReducer,
  setSelectedItemId,
} from '../appReducer'

test('correct id should be set', () => {
  let InitialState: AppInitialStateType = {
    selectedItemId: 'rundom',
  }
  const endState = appReducer(InitialState, setSelectedItemId('id'))
  expect(endState.selectedItemId).toBe('id')
})
