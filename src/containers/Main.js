import React, {Component} from 'react'
import RandomList from '../components/RandomList'
import FavoriteList from '../components/FavoriteList'
import TimerButton from '../components/TimerButton'
import Header from '../components/Header'
import FetchButton from '../components/FetchButton'
import {fetchJokes} from '../services/JokeService'

class Main extends Component {
    state = {
        randomList: [],
        favoriteList: [],
        counter: 5,
        timer: null,
    }

    componentDidMount() {
        window.addEventListener('beforeunload', this.savoToSession)
        let storedFavorites = sessionStorage.getItem('favorites')
        if (storedFavorites) {
            storedFavorites = JSON.parse(storedFavorites)
            this.setState({favoriteList: storedFavorites})
        }
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.savoToSession)
        clearInterval(this.state.timer)
    }

    savoToSession = () => {
        sessionStorage.setItem('favorites', JSON.stringify(this.state.favoriteList))
    }

    fetchRandomJokes = amount => {
        fetchJokes(10).then(jokes => {
            //check if there are already favorites present and add isFavorite flag
            jokes.map(item => (item.isFavorite = -1 !== this.findFavoriteIndex(item.id)))
            this.setState({randomList: jokes})
        })
    }

    findFavoriteIndex = id => {
        return this.state.favoriteList.findIndex(i => i.id === id)
    }

    findRandomListIndex = id => {
        return this.state.randomList.findIndex(i => i.id === id)
    }

    toggleFavorite = i => {
        const randomList = [...this.state.randomList]
        const favoriteList = [...this.state.favoriteList]
        const pickedJoke = randomList[i]

        if (false === pickedJoke.isFavorite && favoriteList.length < 10) {
            favoriteList.push(pickedJoke)
        } else {
            favoriteList.splice(this.findFavoriteIndex(pickedJoke.id), 1)
        }

        pickedJoke.isFavorite = !pickedJoke.isFavorite
        this.setState({randomList, favoriteList})
    }

    removeFavorite = i => {
        const randomList = [...this.state.randomList]
        const favoriteList = [...this.state.favoriteList]
        const id = favoriteList[i].id
        console.log(id)

        favoriteList.splice(i, 1)

        //also toggle the star from randomlist
        const randomListIndex = this.findRandomListIndex(id)

        if (-1 !== randomListIndex) {
            randomList[randomListIndex].isFavorite = false
        }

        this.setState({favoriteList, randomList})
    }

    addRandomFavorite = () => {
        const favoriteList = [...this.state.favoriteList]
        const randomList = [...this.state.randomList]

        fetchJokes(1).then(data => {
            //make sure joke doesn't exist yet in favorites
            if (-1 === this.findFavoriteIndex(data[0].id)) {
                const newList = [...favoriteList, data[0]]

                //also check if joke is in randomList, to set the isFavorite flag
                const randomListIndex = this.findRandomListIndex(data[0].id)

                if (-1 !== randomListIndex) {
                    randomList[randomListIndex].isFavorite = true
                }

                this.setState({favoriteList: newList, randomList})
            } else {
                console.log('Joke is already in favorite list')
            }
        })
    }

    toggleTimer = () => {
        if (null !== this.state.timer) {
            this.stopTimer()
        } else {
            this.startTimer()
        }
    }

    startTimer = () => {
        let timer = setInterval(() => {
            if (this.state.favoriteList.length === 10) {
                clearInterval(this.state.timer)
                this.setState({timer: null})
            }

            if (1 === this.state.counter) {
                this.addRandomFavorite()
            }
            //reset or decrement counter
            this.setState({counter: 0 === this.state.counter ? 5 : this.state.counter - 1})
        }, 200)

        this.setState({timer})
    }

    stopTimer = () => {
        clearInterval(this.state.timer)
        this.setState({timer: null})
    }

    render() {
        const {favoriteList} = this.state
        return (
            //React.fragment shorthand
            <>
                <Header>
                    <FetchButton onClick={this.fetchRandomJokes} />
                    <TimerButton
                        toggleTimer={this.toggleTimer}
                        disabled={this.state.favoriteList.length === 10}
                        timer={this.state.timer}
                        counter={this.state.counter}
                    />
                </Header>
                <div style={{display: 'flex'}}>
                    <RandomList
                        toggleFavorite={this.toggleFavorite}
                        randomList={this.state.randomList}
                        disabled={favoriteList.length > 9}
                    />
                    <FavoriteList removeFavorite={this.removeFavorite} favoriteList={this.state.favoriteList} />
                </div>
            </>
        )
    }
}

export default Main
