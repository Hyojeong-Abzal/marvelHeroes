import { Button } from '@material-ui/core';
import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Message.module.css'

type MessagePropsType = {
    message: string
    link?: string
}
const ImgUrl = "https://kripytoniano-i-a-brainiac.webnode.com/_files/200000009-4eef94fe99/Jarvis-pre-render1.png"
function Message(props: MessagePropsType) {
    let now = new Date().toTimeString().slice(0, 5);


    return (
        <div className={s.wrapper}>
            <img className={s.avatar} src={ImgUrl} alt="avatar" />
            <div className={s.angle}></div>
            <div className={s.item}>
                <div className={s.name} >J.A.R.V.I.S.</div>
                <div className={s.text} >{props.message} </div>
                <div className={s.link}>{props.link && <Button
                    variant="contained"
                    color="primary"
                >
                    <NavLink
                        style={{ color: 'white', textDecoration: "none" }}
                        to={props.link}
                    >
                        Click here
                    </NavLink>
                </Button>}</div>
                <div className={s.time} >{now}</div>
            </div>
        </div>
    )
}

export default Message
