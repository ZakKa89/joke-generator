import React, {Component, Fragment} from 'react'
import RandomList from '../components/RandomList'
import FavoriteList from '../components/FavoriteList'
import TimerButton from '../components/TimerButton'
import Header from '../components/Header'
import FetchButton from '../components/FetchButton'
//import {fetchJokes} from '../services/JokeService'
import  { fetchJokes, toggleFavorite } from '../actions'
import { connect } from 'react-redux'

class Main extends Component {

    state = {
        counter: 5,
        timer: null,
    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
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
            if (this.props.favoriteList.length > 9) {
                clearInterval(this.state.timer)
                this.setState({timer: null})
            }

            if (1 === this.state.counter) {
                this.props.fetchJokes(1)
            }
            //reset or decrement counter
            this.setState({counter: 0 === this.state.counter ? 5 : this.state.counter - 1})
        }, 1000)
        this.setState({timer})
    }

    stopTimer = () => {
        clearInterval(this.state.timer)
        this.setState({timer: null})
    }

    toggleFavoriteHandler = (joke) => {
        this.stopTimer()
        this.props.toggleFavorite(joke)
    }

    render() {

        const { favoriteList, randomList, toggleFavorite} = this.props

        return (
            <Fragment>
                <Header>
                    <FetchButton fetchJokes={this.props.fetchJokes} />
                    <TimerButton
                        toggleTimer={this.toggleTimer}
                        disabled={favoriteList.length > 9}
                        timer={this.state.timer}
                        counter={this.state.counter}
                    />
                </Header>
                <div style={{display: 'flex'}}>
                    <RandomList
                        toggleFavorite={this.toggleFavoriteHandler}
                        randomList={randomList}
                        disabled={favoriteList.length > 9}
                    />
                    <FavoriteList
                        toggleFavorite={toggleFavorite}
                        favoriteList={favoriteList}
                    />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { randomList: state.randomJokes, favoriteList: state.starredJokes}
}

export default connect(mapStateToProps, { fetchJokes, toggleFavorite })(Main)
