import React, { Component } from 'react'
import NameTag from "../NameTag";
import {connect} from "react-redux";
import {compose} from "redux";
import {add_student} from "../../actions/actionCreators/lesson";
import {ItemTypes as itemTypes} from "../../constatnts/itemType";
import { DropTarget } from 'react-dnd';

const data = {
	grade: '中２',
	subject: '集団数学',
	teachers: [
		"竹内 悠人"
	],
	students: [
		{name: "和田 知樹"},
		{name: "天羽 圭介"},
	]
}

const canAddStudent = (students, name) => {
	if (students.filter((student) => student.name == name).length <= 0) {
		return true
	}
	return false
}

const squareTarget = {
	drop(props, monitor) {
		const {name} = monitor.getItem()
		props.add_student({name: name}, 1)
	},
	canDrop(props, monitor) {
		const {name} = monitor.getItem()
		return canAddStudent(props.students, name)
	}
};

const collect = (connect, monitor) => {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver()
	};
}

class Lesson extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { color, students, grade } = this.props
		const { connectDropTarget, isOver } = this.props;
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
		const studentsList = students.map((student, i) => <NameTag key={i} name={student.name}/>)

		return connectDropTarget(
			<div style={{
				width: 180,
				padding: 10,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundColor: fill,
				border: `4px solid ${border}`
			}}>
				<p style={styles.title}>{grade} {data.subject}</p>
				<p style={styles.subTitle}>講師</p>
				{teachers}
				<p style={styles.subTitle}>生徒</p>
				{studentsList}
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

const mapStateToProps = state => {
	return {
		grade: state.lesson.grade,
		students: state.lesson.students
	}
}

const mapDispatchToProps = dispatch => {
	return {
		add_student: (student, toLessonId) => {
			dispatch(add_student(student, toLessonId))
		}
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	DropTarget(itemTypes.SUBJECT, squareTarget, collect),
)(Lesson)
