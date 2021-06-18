import { appReducer, InitialStateType, setCharacterDescMode, setSelectedCharacter } from './../appReducer';
import React from 'react'
import { exId } from '../../CharactersList/characterList-reducer'
import { v1 } from 'uuid';

test('correct id should be set', () => {
  let InitialState: InitialStateType = {
    characterDescMode: false,
    selectedCharacter: exId,
  }
  let id = v1();
  const endState = appReducer(InitialState, setSelectedCharacter(id))
  expect(endState.selectedCharacter).toBe(id)
})


test('correct value should be set', () => {
    let InitialState: InitialStateType = {
      characterDescMode: false,
      selectedCharacter: exId,
    }
 
    const endState = appReducer(InitialState, setCharacterDescMode(true))
    expect(endState.characterDescMode).toBe(true)
  })
  