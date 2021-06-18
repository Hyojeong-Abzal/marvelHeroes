import React from 'react'
import { v1 } from 'uuid'

// export const exId = v1()
const initialState = {
  characters: [
    {
      id: "Tony",
      name: 'Tony Stark',
      description:
        'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.',
      tags: ['Rich', 'Smart'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/1970/05/ironman-1-286x400.png',
      largePicture:
        'https://kvmarvel.ru/wp-content/uploads/1970/05/iron-man-mark-lxxxv-hot-toys-promo.png',
    },
    {
      id: "Hulk",
      name: 'Hulk',
      description:
        'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets',
      tags: ['Strenght', 'Green'],
      smallPicture:
        'https://kvmarvel.ru/wp-content/uploads/1969/12/hulk-286x400.png',
      largePicture:
        'https://kvmarvel.ru/wp-content/uploads/1969/12/hulkbuster-iron-studios-promo.png',
    },
    {
      id: v1(),
      name: 'Tony Stark',
      description:
        'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.',
      tags: ['Rich', 'Smart'],
      smallPicture: '',
      largePicture: '',
    },
    {
      id: v1(),
      name: 'Tony Stark',
      description:
        'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.',
      tags: ['Rich', 'Smart'],
      smallPicture: '',
      largePicture: '',
    },
  ],
}

export const charactersListReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    default:
      return { ...state }
  }
}

export type InitialStateType = typeof initialState

export const setAppErrorAC = (error: null) =>
  ({ type: 'APP/SET-ERROR', error } as const)

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>

type ActionsType = SetAppErrorActionType

export type CharacterType = {
  id: string
  name: string
  description: string
  tags: string[]
  smallPicture: string
  largePicture: string
}
