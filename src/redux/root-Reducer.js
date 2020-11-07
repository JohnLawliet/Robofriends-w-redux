import {combineReducers} from 'redux'
import robotReducer from './search-robots/robot-reducer'
import searchReducer from './search-change/search-reducers'

const rootReducer = combineReducers({
    robot: robotReducer,
    search: searchReducer
})

export default rootReducer