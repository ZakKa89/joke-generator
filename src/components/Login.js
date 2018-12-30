import React from 'react'
import {LoginButton, ListHeader} from '../utilities/StyledComponents'

const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    width: '20rem',
    margin: '0 auto',
}

const inputStyle = {
    marginTop: '-1rem',
    fontSize: '1.5rem',
    padding: '.5rem',
    border: '1px solid lightgrey',
}

const errorMessageStyle = {
    color: 'white',
    textAlign: 'center',
}

const LoginModal = props => {
    const {onChange, onSubmit} = props
    const {errorMessages = [], isValid} = props.validator

    return (
        <>
            <br />
            <div style={wrapperStyle}>
                <ListHeader>Name</ListHeader>
                <input style={inputStyle} name="username" onChange={onChange} />
                <ListHeader>Password</ListHeader>
                <input style={inputStyle} name="password" onChange={onChange} />
                <br />

                <LoginButton disabled={!isValid || props.username.length < 1} onClick={onSubmit}>
                    Login
                </LoginButton>
            </div>

            {errorMessages.map((message, i) => (
                <div style={errorMessageStyle} key={i}>
                    {message && '- ' + message}
                </div>
            ))}
        </>
    )
}

export default LoginModal
