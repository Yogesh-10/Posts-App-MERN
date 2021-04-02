import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { postsReducers } from './reducers/postsReducers'

const reducer = combineReducers({
	posts: postsReducers,
})

const initialState = {}

const middleWare = [thunk]

const store = createStore(reducer, compose(applyMiddleware(...middleWare)))

export default store
