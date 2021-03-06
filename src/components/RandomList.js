import React from 'react';
import { Joke, StarButton, JokeWrapper, ListHeader } from '../utilities/StyledComponents';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faLaugh, faStar as faFullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';

const RandomList = (props) => {
	const { randomList, toggleFavorite, disabled } = props;

	return (
		<div style={{ width: '50%', padding: '0 1rem' }}>
			<ListHeader style={{ color: 'white' }}>
				<Icon icon={faLaugh} />&nbsp;Random
			</ListHeader>

			<ul>
				{randomList.map((item) => (
					<JokeWrapper key={item.id}>
						<StarButton
							isFavorite={item.isFavorite}
							disabled={disabled}
							onClick={() => toggleFavorite(item)}
						>
							<Icon icon={item.isFavorite ? faFullStar : faStar} />
						</StarButton>
						<Joke>{item.joke}</Joke>
					</JokeWrapper>
				))}
			</ul>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { randomList: state.randomJokes };
};

export default connect(mapStateToProps)(RandomList);
