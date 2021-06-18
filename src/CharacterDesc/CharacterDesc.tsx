import React from 'react'
import { useSelector } from 'react-redux'
import { AppRootStateType } from '../app/store'
import { CharacterType } from '../CharactersList/characterList-reducer'



export const CharacterDesc: React.FC = () => {

    const selectedCharacterId = useSelector<AppRootStateType, string>(state => {
        debugger
        return state.app.selectedCharacter
    })
    const charactersList = useSelector<AppRootStateType, CharacterType[]>(state => state.charactersList.characters)

    const selectedCharacter = charactersList.filter(ch => {
        return ch.id === selectedCharacterId
    })
    return (
        <div>

            {/* {selectedCharacter[0].name}
            <img src={selectedCharacter[0].largePicture} alt="" /> */}
        </div>
    )
}