import React from 'react'

const RandomList = props => {
    const {randomList, toggleFavorite, disabled} = props

    return randomList.map((item, i) => {
        return (
            <div key={item.id}>
                <button disabled={disabled} onClick={toggleFavorite.bind(this, i)}>
                    setFavorite
                    {item.isFavorite ? '*' : '-'}
                </button>
                {item.joke}
            </div>
        )
    })
}

export default RandomList
