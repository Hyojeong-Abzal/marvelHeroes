import { inputValuesType } from './../../components/AddItem/AddItem';
import { ItemType } from './../itemsListReducer'
import React from 'react'
import {
  addItem,
  deleteItem,
  InitialStateType,
  itemsListReducer,
} from '../itemsListReducer'

let initialState: InitialStateType

beforeEach(() => {
  initialState = {
    characters: [
      {
        id: 1,
        name: 'Iron Man',
        description:
          "Ultimate Iron Man  reveals that Tony Stark's genius is the result of an accident his mother (brilliant scientist Maria Cerrera, who is the second wife of Tony Stark's father, Howard, and works for him in research and development before Tony was born) suffered while she was carrying him in her womb. The accident changed the genetic structure of both her and her unborn child, but culminated in her death during childbirth. The child, named Antonio (Tony for short), developed neural tissue normally found only in the brain all throughout his body, causing his entire body to act as one massive brain, giving him tremendous mental capacity. However, one of the side effects of the accident from the minute he was born was an extreme dermal sensitivity, making even the sensation of air on his skin feel like severe burns due to the overstimulation of neural cells in his skin. Howard Stark, a master inventor and owner and CEO of his own billion dollar tech company, used a newly invented liquid, biological armour to ease Tony's agony; a buffer allowing him to interact with the world normally, but one he would have to wear for the rest of his life.",
        tags: ['Rich', 'Smart'],
        smallPicture:
          'https://kvmarvel.ru/wp-content/uploads/1970/05/ironman-1-286x400.png',
        largePicture:
          'https://kvmarvel.ru/wp-content/uploads/1970/05/iron-man-mark-lxxxv-hot-toys-promo.png',
        wiki: 'https://en.wikipedia.org/wiki/Ultimate_Iron_Man',
      },
      {
        id: 2,
        name: 'Hulk',
        description:
          'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets',
        tags: ['Strenght', 'Green'],
        smallPicture:
          'https://kvmarvel.ru/wp-content/uploads/1969/12/hulk-286x400.png',
        largePicture:
          'https://kvmarvel.ru/wp-content/uploads/1969/12/hulkbuster-iron-studios-promo.png',
        wiki: 'https://en.wikipedia.org/wiki/Hulk',
      },
      {
        id: 3,
        name: 'Thor',
        description:
          "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate. He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
        tags: ['Rich', 'Smart'],
        smallPicture:
          'https://kvmarvel.ru/wp-content/uploads/1015/03/thor-2-286x400.png',
        largePicture:
          'https://kvmarvel.ru/wp-content/uploads/2019/03/gladiator-thor-deluxe-version.png',
        wiki: 'https://en.wikipedia.org/wiki/Thor_(Marvel_Comics)',
      },
    ],
  }
})

test('item  should be add', () => {
  let item: inputValuesType = {
    name: "Suan",
    description: "",
    url: "",
    tags: "smart",
  }
  const endState = itemsListReducer(initialState, addItem(item))
  expect(endState.characters.length).toBe(4)
  expect(endState.characters[0].name).toBe("Suan")
})

test('item  should be deleted by id', () => {
  const endState = itemsListReducer(initialState, deleteItem(1))
  expect(endState.characters.length).toBe(2)
  expect(endState.characters[0].id).toBe(2)
})
