import React from 'react';
import { Joke, DeleteButton, JokeWrapper, ListHeader } from '../utilities/StyledComponents';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes, faStar } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

const FavoriteList = (props) => {
	const { favoriteList, toggleFavorite } = props;

	return (
		<div style={{ width: '50%', padding: '0 1rem' }}>
			<ListHeader style={{ color: 'white' }}>
				<Icon icon={faStar} color="gold" />
				&nbsp;
				{favoriteList.length}/10
			</ListHeader>

			{favoriteList.map((item, i) => (
				<JokeWrapper key={item.id}>
					<DeleteButton onClick={() => toggleFavorite(item)} fixedWidth>
						<Icon icon={faTimes} />
					</DeleteButton>
					<Joke>{item.joke}</Joke>
				</JokeWrapper>
			))}
		</div>
	);
};

const mapStateToProps = (state) => {
	return { favoriteList: state.starredJokes }
};

export default connect(mapStateToProps)(FavoriteList);
