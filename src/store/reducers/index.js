import { combineReducers } from 'redux'
import {knight} from "./knight"
import {lesson} from "./lesson"

const reducers = combineReducers({
	knight,
	lesson
})

export default reducers