export const FETCH_JOKES = 'FETCH_JOKES';
export const FETCH_JOKE = 'FETCH_JOKE';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

//Action creators
export function toggleFavorite (joke) {
	return { type: TOGGLE_FAVORITE, payload: joke }
};

export const fetchJokes = (amount) => async (dispatch) => {

	try {
		console.log("amount", amount)

		const response = await fetch(`http://api.icndb.com/jokes/random/${amount}?escape=javascript&limitTo=[nerdy]`);
		const data = await response.json();
		console.log("data", data)
		if (data.type === 'success') {
			dispatch({ type: amount === 1 ? FETCH_JOKE : FETCH_JOKES, payload: data.value });
		} else alert('Something went wrong with fetching the jokes from the source');
	} catch (err) {
		console.log(err);
	}
};
