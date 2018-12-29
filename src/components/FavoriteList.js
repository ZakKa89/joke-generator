import React from 'react'

const FavoriteList = props => {
    //render favorites
    const {favoriteList, removeFavorite} = props

    return favoriteList.map((item, i) => {
        return (
            <div key={item.id}>
                <button onClick={removeFavorite.bind(this, i)}>trash</button>
                {item.joke}
            </div>
        )
    })
}

export default FavoriteList
