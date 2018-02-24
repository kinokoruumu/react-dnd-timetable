import {ADD_STUDENT, CHANGE_START_TIME} from "../../actions/actionTypes/lesson";
import moment from "moment";

const initialState = {
	lessons: [
		{
			lessonId: 1,
			boothId: 1,
			grade: '中２',
			subject: '集団数学',
			teachers: [
				{
					id: 1,
					name: "竹内 悠人"
				}
			],
			students: [
				{
					id: 1,
					name: "和田 知樹",
				},
				{
					id: 2,
					name: "天羽 圭介",
				}
			],
			schedule: {
				start: "2018-02-25 16:00:00",
				end: "2018-02-25 17:00:00",
				length: 1
			}
		},
		{
			lessonId: 2,
			boothId: 1,
			grade: '中２',
			subject: '集団数学',
			teachers: [
				{
					id: 1,
					name: "竹内 悠人"
				}
			],
			students: [
				{
					id: 1,
					name: "和田 知樹",
				},
				{
					id: 2,
					name: "天羽 圭介",
				}
			],
			schedule: {
				start: "2018-02-25 18:00:00",
				end: "2018-02-25 19:00:00",
				length: 1
			}
		},
		{
			lessonId: 3,
			boothId: 1,
			grade: '中２',
			subject: '集団数学',
			teachers: [
				{
					id: 1,
					name: "竹内 悠人"
				}
			],
			students: [
				{
					id: 1,
					name: "和田 知樹",
				},
				{
					id: 2,
					name: "天羽 圭介",
				}
			],
			schedule: {
				start: "2018-02-25 19:00:00",
				end: "2018-02-25 20:00:00",
				length: 1
			}
		},
		{
			lessonId: 4,
			boothId: 3,
			grade: '中２',
			subject: '集団数学',
			teachers: [
				{
					id: 1,
					name: "竹内 悠人"
				}
			],
			students: [
				{
					id: 1,
					name: "和田 知樹",
				},
				{
					id: 2,
					name: "天羽 圭介",
				}
			],
			schedule: {
				start: "2018-02-25 16:00:00",
				end: "2018-02-25 17:00:00",
				length: 1
			}
		},
		{
			lessonId: 5,
			boothId: 3,
			grade: '中２',
			subject: '集団数学',
			teachers: [
				{
					id: 1,
					name: "竹内 悠人"
				}
			],
			students: [
				{
					id: 1,
					name: "和田 知樹",
				},
				{
					id: 2,
					name: "天羽 圭介",
				}
			],
			schedule: {
				start: "2018-02-25 17:00:00",
				end: "2018-02-25 18:00:00",
				length: 1
			}
		},
		{
			lessonId: 6,
			boothId: 4,
			grade: '中２',
			subject: '集団数学',
			teachers: [
				{
					id: 1,
					name: "竹内 悠人"
				}
			],
			students: [
				{
					id: 1,
					name: "和田 知樹",
				},
				{
					id: 2,
					name: "天羽 圭介",
				}
			],
			schedule: {
				start: "2018-02-25 16:00:00",
				end: "2018-02-25 17:00:00",
				length: 1
			}
		},
		{
			lessonId: 7,
			boothId: 4,
			grade: '中２',
			subject: '集団数学',
			teachers: [
				{
					id: 1,
					name: "竹内 悠人"
				}
			],
			students: [
				{
					id: 1,
					name: "和田 知樹",
				},
				{
					id: 2,
					name: "天羽 圭介",
				}
			],
			schedule: {
				start: "2018-02-25 17:00:00",
				end: "2018-02-25 18:00:00",
				length: 1
			}
		},
		{
			lessonId: 8,
			boothId: 4,
			grade: '中２',
			subject: '集団数学',
			teachers: [
				{
					id: 1,
					name: "竹内 悠人"
				}
			],
			students: [
				{
					id: 1,
					name: "和田 知樹",
				},
				{
					id: 2,
					name: "天羽 圭介",
				}
			],
			schedule: {
				start: "2018-02-25 18:00:00",
				end: "2018-02-25 19:00:00",
				length: 1
			}
		},
		{
			lessonId: 9,
			boothId: 4,
			grade: '中２',
			subject: '集団数学',
			teachers: [
				{
					id: 1,
					name: "竹内 悠人"
				}
			],
			students: [
				{
					id: 1,
					name: "和田 知樹",
				},
				{
					id: 2,
					name: "天羽 圭介",
				}
			],
			schedule: {
				start: "2018-02-25 19:00:00",
				end: "2018-02-25 20:00:00",
				length: 1
			}
		},
	]

}

export const lesson = (state = initialState, action) => {
	switch (action.type) {
		case ADD_STUDENT:
			const lessons = state.lessons;
			for(let lesson of lessons) {
				if(lesson.lessonId === action.toLessonId) lesson.students.push(action.user);
			}
			return Object.assign({}, state, {
				lessons: lessons
			})

		case CHANGE_START_TIME:
			const nowLessons = state.lessons;
			for(let lesson of nowLessons) {
				if(lesson.lessonId === action.lessonId) {
					const {length} = lesson.schedule
					const start = `${moment(lesson.schedule.start).format("YYYY-MM-DD")} ${action.time}:00`
					const end = moment(start).add(length, 'h').format("YYYY-MM-DD HH:mm:ss")
					lesson.schedule = {
						start,
						end,
						lesson
					}

					lesson.boothId = action.boothId
				}
			}
			return Object.assign({}, state, {
				lessons: nowLessons
			})
		default:
			return state
	}
}