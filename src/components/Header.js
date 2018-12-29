import React from 'react'

const headerStyle = {
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    padding: '1rem',
}

const Header = props => <div style={headerStyle}>{props.children}</div>

export default Header
