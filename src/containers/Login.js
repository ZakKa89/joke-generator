import React, {Component} from 'react'
import StringValidator from '../utilities/StringValidator'
import Login from '../components/Login.js'

export default class LoginContainer extends Component {
    state = {
        username: '',
        password: '',
        validator: {},
    }

    onSubmit = () => {
        if (this.state.validator.isValid) {
            sessionStorage.setItem('authenticatedUser', this.state.username)
            this.props.authenticate(this.state.username)
        } else {
            alert('Wrong Password')
        }
    }

    onChange = e => {
        const state = {...this.state}
        state[e.target.name] = e.target.value

        if (e.target.name === 'password') {
            state.validator = StringValidator(e.target.value)
        }

        this.setState(state)
    }

    render() {
        return <Login {...this.state} onSubmit={this.onSubmit} onChange={this.onChange} />
    }
}
