import React, {Component} from 'react'
import Login from './containers/Login.js'
import Main from './containers/Main.js'
import './index.css'

const containerStyle = {
    minHeight: '100%',
    width: '100%',
    backgroundColor: '#663399', //purple
}

class App extends Component {
    state = {
        authenticatedUser: null,
    }

    componentDidMount() {
        const authenticatedUser = sessionStorage.getItem('authenticatedUser')
        if (authenticatedUser) {
            this.setState({authenticatedUser})
        }
    }

    authenticate = user => {
        this.setState({authenticatedUser: user})
    }

    render() {
        return (
            <div style={containerStyle}>
                {this.state.authenticatedUser ? <Main /> : <Login authenticate={this.authenticate} />}
            </div>
        )
    }
}

export default App
