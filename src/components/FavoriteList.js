import React from 'react';
import { Joke, DeleteButton, JokeWrapper, ListHeader } from '../utilities/StyledComponents';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes, faStar } from '@fortawesome/free-solid-svg-icons';

const FavoriteList = (props) => {
	const { favoriteList, toggleFavorite } = props;

	return (
		<div style={{ width: '50%', padding: '0 1rem' }}>
			<ListHeader style={{ color: 'white' }}>
				<Icon icon={faStar} color="gold" />
				&nbsp;
				{favoriteList.length}/10
			</ListHeader>

			{favoriteList.map((joke, i) => (
				<JokeWrapper key={joke.id}>
					<DeleteButton onClick={() => toggleFavorite(joke)} fixedWidth>
						<Icon icon={faTimes} />
					</DeleteButton>
					<Joke>{joke.joke}</Joke>
				</JokeWrapper>
			))}
		</div>
	);
};



export default FavoriteList;
