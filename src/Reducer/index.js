import {combineReducers} from 'redux'
import todos from './todos'


const all= combineReducers({
    todos,
})
export default all;