import CombineReducers from './reducer/CombineReducer'
import {applyMiddleware,createStore} from 'redux'
import thunk from 'redux-thunk'

export default function ConfigureStore(){
    return createStore(CombineReducers,applyMiddleware(thunk))
}