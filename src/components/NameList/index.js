import React, { Component } from 'react'
import NameTag from "../NameTag";

const data = {
	students: [
		"相田 正俊",
		"天羽 圭介",
		"池田 浩一",
	]
}

export default class NameList extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const students = data.students.map((student, i) => <NameTag key={i} name={student}/>)

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
