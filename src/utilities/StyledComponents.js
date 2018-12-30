import styled from '@emotion/styled'

export const HeaderButton = styled.button({
    outline: 0,
    fontSize: '1.5rem',
    //padding: '.25rem 2rem',
    backgroundColor: 'orange',
    borderRadius: '.25rem',
    boxShadow: 'inset 0px -5px 0px rgb(0,0,0, 0.5)',
    fontWeight: 'bold',
    color: 'white',
    border: 0,
    width: '15rem',
    ':hover': {
        backgroundColor: 'darkorange',
    },
    ':active': {
        backgroundColor: 'darkorange',
        boxShadow: 'inset 0px 5px 0px rgb(0,0,0, 0.5)',
        paddingTop: '5px',
    },
    ':disabled': {
        backgroundColor: 'grey',
    },
})

export const IconButton = styled.button({
    fontSize: '1.5rem',
    padding: 0,
    outline: 0,
    marginRight: '1rem',
    backgroundColor: 'transparent',
    color: 'white',
    border: 0,
})

export const StarButton = styled(IconButton)(props => ({
    borderRadius: '.25rem',
    color: props.isFavorite ? 'gold' : 'white',
    ':hover': {
        color: 'gold',
    },
    ':active': {
        color: 'orange',
    },
    ':disabled': {
        color: 'grey',
    },
}))

export const DeleteButton = styled(IconButton)({
    ':hover': {
        color: 'orangered',
    },
    ':active': {
        color: 'firebrick',
    },
    ':disabled': {
        color: 'grey',
    },
})

export const JokeWrapper = styled.div({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '.5rem',
})

export const ListHeader = styled.h1({
    color: 'white',
    textAlign: 'center',
})

export const Joke = styled.span({
    color: 'white',
})
