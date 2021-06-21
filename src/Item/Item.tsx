import { Button } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux'
import style from './Item.module.css'
import { Link } from 'react-router-dom'
import ReactTypingEffect from 'react-typing-effect';
import { RoutePath } from '../app/App';

type CharacterPropsType = {
    id: number
    name: string
    tags: string[]
    description: string
    smallPic: string

}

export const Item: React.FC<CharacterPropsType> = (props) => {
    const dispatch = useDispatch();

    const onClickHadler = () => {
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
                    <Link
                        style={{ color: 'white', textDecoration: "none" }}
                        to={RoutePath.CHARACTER_DESCRIPTION + `${props.name}/${props.id}`}
                    >
                        read more
                    </Link>
                </Button>
            </div>
        </div>
    )
}