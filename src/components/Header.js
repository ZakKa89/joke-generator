import React from 'react'

const headerStyle = {
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    height: '4rem',
}

const Header = props => <div style={headerStyle}>{props.children}</div>

export default Header
