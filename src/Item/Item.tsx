import { Button } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux'
import style from './Item.module.css'
import { Link } from 'react-router-dom'
import ReactTypingEffect from 'react-typing-effect';
import { RoutePath } from '../app/App';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteItem } from '../ItemsList/itemsListReducer';

type CharacterPropsType = {
    id: number
    name: string
    tags: string[]
    description: string
    smallPic: string
    localStorage?: boolean

}

export const Item: React.FC<CharacterPropsType> = (props) => {
    const dispatch = useDispatch();

    const addHandeler = () => {
    }
    const deleteHandler = () => {
        dispatch(deleteItem(props.id))
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
                <p className={style.descriptionText}>{desc}...</p>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={addHandeler}
                >
                    <Link
                        style={{ color: 'white', textDecoration: "none" }}
                        to={RoutePath.CHARACTER_DESCRIPTION + `${props.name}/${props.id}`}
                    >
                        read more
                    </Link>
                </Button>
                {props.localStorage && <IconButton onClick={deleteHandler} >
                    <DeleteIcon fontSize="small" />
                </IconButton>
                }
            </div>
        </div>
    )
}