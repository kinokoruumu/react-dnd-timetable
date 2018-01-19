import React, { Component } from 'react'
import NameTag from "../NameTag";

const data = {
	grade: '中２',
	subject: '集団数学',
	teachers: [
		"竹内 悠人"
	],
	students: [
		"和田 知樹",
		"天羽 圭介",
	]
}

export default class Lesson extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { color } = this.props
		let fill, border = ""
		switch (color) {
			case "blue":
				fill = "rgb(65, 180, 255)"
				border = "rgb(0, 110, 191)"
				break
			case "orange":
				fill = "rgb(255, 182, 57)"
				border = "rgb(255, 147, 0)"
				break
			default:
				fill = ""
				border = ""
				break
		}

		const teachers = data.teachers.map((teacher, i) => <NameTag key={i} name={teacher}/>)
		const students = data.students.map((student, i) => <NameTag key={i} name={student}/>)

		return (
			<div style={{
				width: 180,
				padding: 10,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundColor: fill,
				border: `4px solid ${border}`
			}}>
				<p style={styles.title}>{data.grade} {data.subject}</p>
				<p style={styles.subTitle}>講師</p>
				{teachers}
				<p style={styles.subTitle}>生徒</p>
				{students}
			</div>
		)
	}
}

const styles = {
	title: {
		textAlign: 'center',
		color: '#FFF',
	},
	subTitle: {
		width: '100%',
		padding: '7px 0 5px',
		color: '#FFF',
	},
}
