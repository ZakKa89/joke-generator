import React from 'react'
import {Joke, DeleteButton, JokeWrapper, ListHeader} from '../utilities/StyledComponents'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import {faTimes, faStar} from '@fortawesome/free-solid-svg-icons'

const FavoriteList = props => {
    const {favoriteList, removeFavorite} = props

    return (
        <div style={{width: '50%', padding: '0 1rem'}}>
            <ListHeader style={{color: 'white'}}>
                <Icon icon={faStar} color="gold" />
                &nbsp;
                {favoriteList.length}/10
            </ListHeader>

            {favoriteList.map((item, i) => (
                <JokeWrapper key={item.id}>
                    <DeleteButton onClick={removeFavorite.bind(this, i)} fixedWidth>
                        <Icon icon={faTimes} />
                    </DeleteButton>
                    <Joke>{item.joke}</Joke>
                </JokeWrapper>
            ))}
        </div>
    )
}

export default FavoriteList
