import {ADD_STUDENT} from "../actionTypes/lesson";

export const add_user = (user, toLessonId) => {
	return {
		type: ADD_STUDENT,
		user,
		toLessonId
	}
}
