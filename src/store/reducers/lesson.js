import {ADD_STUDENT} from "../../actions/actionTypes/lesson";

const initialState = {
	grade: '中２',
	subject: '集団数学',
	teachers: [
		"竹内 悠人"
	],
	students: [
		{
			name: "和田 知樹",
		},
		{
			name: "天羽 圭介",
		}
	]
}

export const lesson = (state = initialState, action) => {
	switch (action.type) {
		case ADD_STUDENT:
			return Object.assign({}, state, {
				students: [...state.students, action.student]
			})
		default:
			return state
	}
}