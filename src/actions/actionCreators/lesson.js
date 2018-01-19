import {ADD_STUDENT} from "../actionTypes/lesson";

export const add_student = (student, toLessonId) => {
	return {
		type: ADD_STUDENT,
		student,
		toLessonId
	}
}
