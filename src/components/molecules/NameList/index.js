import React, { Component } from 'react'
import NameTag from "../../atoms/NameTag";

const data = {
	students: [
		{
			id: 2,
			name: "天羽 圭介",
		},
		{
			id: 3,
			name: "池田 浩一",
		},
		{
			id: 4,
			name: "池田 浩一",
		},
		{
			id: 5,
			name: "相田 正俊",
		},
	]
}

export default class NameList extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const students = data.students.map((student, i) => <NameTag key={i} user={student}/>)

		return (
			<div style={{
				width: 180,
				padding: 10,
			}}>
				{students}
			</div>
		)
	}
}
