import { Button } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedItemId } from '../app/appReducer';
import style from './Item.module.css'
import { NavLink } from 'react-router-dom'
import ReactTypingEffect from 'react-typing-effect';

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
        dispatch(setSelectedItemId(props.id))
    }
    let desc = props.description.substring(0, 145)
    function getRandomInRange(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    return (
        <div className={style.wrapper}>
            <div className={style.smallPic}>
                <img src={props.smallPic} alt="" />
            </div>
            <div className={style.description}>
                <h1 className={style.title}>{
                    <ReactTypingEffect
                        speed={getRandomInRange(50, 1500)}
                        text={[props.name]}
                    />
                }</h1>
                {props.tags.map(t => <span className={style.tag}>{t}</span>)}
                <p>{desc}...</p>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onClickHadler}
                >
                    <NavLink
                        style={{ color: 'white', textDecoration: "none" }}
                        to={`/Character-description/${props.name.replace(/ /g, "-")}`}
                    >
                        read more
                    </NavLink>
                </Button>
            </div>
        </div>
    )
}