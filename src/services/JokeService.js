export async function fetchJokes(amount) {
    try {
        const response = await fetch(`http://api.icndb.com/jokes/random/${amount}?escape=javascript`)
        const data = await response.json()

        if (data.type === 'success') return data.value
        else alert('Something went wrong with fetching the jokes from the source')
    } catch (err) {
        console.log(err)
    }
}
