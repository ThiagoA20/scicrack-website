import React, { useState } from 'react'
import {ClickAwayListener} from '@mui/material'


const DropDown = (props) => {

    const [open, setOpen] = useState(false);
    const [arrow, setArrow] = useState('down')

    const handleClickAwayEvent = () => {
        setOpen(false);
        setArrow('down')
    };
      
    const handleClickEvent = () => {
        setOpen((prev) => !prev);
        if (arrow === 'up') {
            setArrow('down')
        } else {
            setArrow('up')
        }
    };

    return (
        <ClickAwayListener onClickAway={handleClickAwayEvent}>
            <div>
                <div className="dropdown-box">
                    <p className="dropDownElement" onClick={handleClickEvent}>
                        {props.name}
                        <div className="bg_transparent" style={{
                            marginLeft: '5px',
                            marginRight: '5px'
                        }}><i className={`arrow ${arrow} bg_transparent`}></i></div>
                    </p>
                </div>
                {open ? (
                    <div style={{
                        position: 'absolute',
                        background: 'white',
                        width: '300px',
                        marginTop: '30px',
                        marginLeft: '-210px'
                    }}>
                        {Object.entries(props.drops).map((redirect, index) => {
                            if (props.drops[index] === "Account") {
                                return (
                                    <div>
                                        <a href={`/account/login`}>{props.drops[index]}</a>
                                    </div>
                                )
                            } else {
                                return (
                                    <div>
                                        <a href={`/${props.drops[index]}/`}>{props.drops[index]}</a>
                                    </div>
                                )
                            }
                        })}
                    </div>
                ) : null}
            </div>
        </ClickAwayListener>
    )
}

export default DropDown