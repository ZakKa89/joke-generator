import React from 'react'

const TimerButton = props => {
    const {toggleTimer, disabled, timer, counter} = props
    return (
        <button onClick={toggleTimer} disabled={disabled}>
            toggleTimer{timer && counter}
        </button>
    )
}

export default TimerButton
