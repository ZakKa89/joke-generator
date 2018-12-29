import React from 'react'

const boxStyle = {
    backgroundColor: 'white',
    borderRadius: '.5rem',
    color: 'black',
    margin: '0 auto',
    padding: '2rem',
    boxShadow: '2px 2px black',
}

const inputStyle = {
    fontSize: '1.5rem',
    padding: '.5rem',
    border: '1px solid lightgrey',
}

const LoginModal = props => {
    const {onChange, onSubmit} = props
    const {errorMessages = [], isValid} = props.validator

    return (
        <div style={boxStyle}>
            <h5>name</h5>
            <input style={inputStyle} name="username" onChange={onChange} />
            <h5>password</h5>
            <input style={inputStyle} name="password" onChange={onChange} />
            {errorMessages.map((message, i) => (
                <div key={i}>{message}</div>
            ))}
            <button disabled={!isValid} onClick={onSubmit}>
                Login
            </button>
        </div>
    )
}

export default LoginModal
