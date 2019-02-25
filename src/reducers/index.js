import { combineReducers } from 'redux';
import { FETCH_JOKES, FETCH_JOKE, TOGGLE_FAVORITE } from '../actions';

function randomJokes(state = [], action) {
	switch (action.type) {
		case FETCH_JOKES:
			return action.payload;
		case TOGGLE_FAVORITE:
			const updatedItems = state.map((joke) => {
				//toggle star
				if (joke.id === action.payload.id) {
					return { ...joke, isFavorite: !action.payload.isFavorite };
				}
				return joke;
			});
			return updatedItems;
		default:
			return state;
	}
}

function starredJokes(state = [], action) {
	switch (action.type) {
		case FETCH_JOKE:
			return action.payload;
		case TOGGLE_FAVORITE:
			const jokeExists = state.some((joke) => joke.id === action.payload.id);
			if (jokeExists) {
				return state.filter((joke) => joke.id !== action.payload.id);
			} else {
				return [ ...state, { ...action.payload, isFavorite: true } ];
			}
		default:
			return state;
	}
}

export default combineReducers({ randomJokes, starredJokes });
