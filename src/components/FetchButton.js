import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { HeaderButton } from '../utilities/StyledComponents';

const FetchButton = (props) => {
	return (
		<HeaderButton onClick={() => props.fetchJokes(10)}>
			<Icon icon={faSync} />&nbsp;FETCH JOKES
		</HeaderButton>
	);
};

export default FetchButton;
