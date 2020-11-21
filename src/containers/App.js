import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/errorboundary'
import './App.css';
import {connect} from 'react-redux'
import {setSearchField} from '../redux/search-change/search-actions'
import {requestRobots} from '../redux/search-robots/robot-actions'
import Header from '../code-split/header'


class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots()
  }

  render() {
    const { searchfield, onSearchChange, robots, isPending } = this.props
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

const mapStateToProps = ({ search, robot}) => ({
  searchfield: search.searchfield,
  robots: robot.robots,
  isPending: robot.isPending
})

const mapDispatchToProps = (dispatch) => {
  return{
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);