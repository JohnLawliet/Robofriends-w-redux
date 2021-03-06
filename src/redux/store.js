import {createStore, applyMiddleware} from 'redux'
import rootReducer from './root-Reducer'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

const logger = createLogger()
const middleware = [thunk]

export const store = createStore(rootReducer, applyMiddleware(...middleware));