import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import hotReducer from './reducer/hotReducer'
const reducer = combineReducers({
    Hot:hotReducer
})
const store =createStore(reducer,applyMiddleware(reduxThunk))

export default store