import {ADD_STUDENT, CHANGE_START_TIME} from "../actionTypes/lesson";

export const add_user = (user, toLessonId) => {
	return {
		type: ADD_STUDENT,
		user,
		toLessonId,
	}
}

export const change_start_time = (lessonId, boothId, time) => {
	return {
		type: CHANGE_START_TIME,
		lessonId,
		boothId,
		time
	}
}
