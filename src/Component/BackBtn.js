import React from 'react'
import {useHistory} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BackBtn() {
    let history = useHistory() 
    return (
        <div className="back__btn">
             <button onClick={() => history.goBack()}><FontAwesomeIcon  icon="arrow-left" size="3x"/></button>
        </div>
    )
}
