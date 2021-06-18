import { Button } from '@material-ui/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {  setSelectedCharacter } from '../app/appReducer';
import style from './Item.module.css'
type CharacterPropsType = {
    id: string
    name: string
    tags: string[]
    description: string
    smallPic: string
}

export const Item: React.FC<CharacterPropsType> = (props) => {
    const dispatch = useDispatch();

    const onClickHadler = () => {
        dispatch(setSelectedCharacter(props.id))

    }
    let desc = props.description.substring(0, 145)



    return (
        <div className={style.item}>
            <div className={style.smallPic}>
                <img src={props.smallPic} alt="" />
            </div>
            <div className={style.description}>
                <h2>{props.name}</h2>
                {props.tags.map(l => <span className={style.tag}>{l}</span>)}
                <p>{desc}...</p>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onClickHadler}
                    href="/Character-describtion">
                    Read more
                </Button>
            </div>
        </div>
    )
}