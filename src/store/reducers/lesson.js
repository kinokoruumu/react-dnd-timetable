import {ADD_STUDENT} from "../../actions/actionTypes/lesson";

const initialState = {
	lessons: [
		{
			lessonId: 1,
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
			]
		},
		{
			lessonId: 2,
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
			]
		},
		{
			lessonId: 3,
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
			]
		}
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
		default:
			return state
	}
}