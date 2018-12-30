import React from 'react'
import {HeaderButton} from '../utilities/StyledComponents'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import {faPlay, faPause} from '@fortawesome/free-solid-svg-icons'

const TimerButton = props => {
    const {toggleTimer, disabled, timer, counter} = props
    return (
        <HeaderButton onClick={toggleTimer} disabled={disabled}>
            <Icon icon={timer ? faPause : faPlay} fixedWidth />
            &nbsp;
            {counter}
        </HeaderButton>
    )
}

export default TimerButton
