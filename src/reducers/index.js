import { combineReducers } from 'redux';
import { FETCH_JOKES, FETCH_JOKE, TOGGLE_FAVORITE, FETCHING, FETCH_SUCCESS, FETCH_FAIL } from '../actions';

//wip
function fetchStatus(state = null, action) {
	switch (action.type) {
		case FETCHING:
			return 'fetching';
		case FETCH_SUCCESS:
			return 'success';
		case FETCH_FAIL:
			return 'failed';
		default:
			return state;
	}
}

function randomJokes(state = [], action) {
	//const { randomJokes, starredJokes, fetchedJokes, isFavorite } = action.payload;

	switch (action.type) {
		case FETCH_JOKES:
			//find existing favorites
			const fetchedJokes = action.payload.fetchedJokes.map((randomJoke) => {
				const starredJoke = action.payload.starredJokes.find((starredJoke) => starredJoke.id === randomJoke.id);
				return starredJoke ? starredJoke : randomJoke;
			});
			return fetchedJokes;
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
			const fetchedJoke = action.payload.fetchedJoke;
			const starredJoke = action.payload.starredJokes.find((starredJoke) => starredJoke.id === fetchedJoke);
			return starredJoke ? state : [ ...state, fetchedJoke ];

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
