export const FETCH_JOKES = 'FETCH_JOKES';
export const FETCH_JOKE = 'FETCH_JOKE';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const FETCHING = 'FETCHING';
export const FETCH_FAIL = 'FETCH_FAIL';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

//Action creators
export function toggleFavorite(joke) {
	return { type: TOGGLE_FAVORITE, payload: joke };
}

export const fetchJokes = (amount) => async (dispatch, getState) => {
	try {
		const response = await fetch(`http://api.icndb.com/jokes/random/${amount}?escape=javascript&limitTo=[nerdy]`);
		const data = await response.json();

		if (data.type === 'success') {
			const starredJokes = getState().starredJokes;
			if (amount === 1) {
				dispatch({
					type: FETCH_JOKE,
					payload: { fetchedJoke: data.value[0], starredJokes: starredJokes }
				});
			} else {
				dispatch({
					type: FETCH_JOKES,
					payload: { fetchedJokes: data.value, starredJokes: starredJokes }
				});
			}
		} else alert('Something went wrong with fetching the jokes from the source');
	} catch (err) {
		console.log(err);
	}
};


export const startTimer = () => {
	let timer = setInterval(() => {
		if (this.props.favoriteList.length > 9) {
			clearInterval(this.state.timer)
			this.setState({timer: null})
		}

		if (1 === this.state.counter) {
			this.props.fetchJokes(1)
		}
		//reset or decrement counter
		this.setState({counter: 0 === this.state.counter ? 5 : this.state.counter - 1})
	}, 100)

	this.setState({timer})
}