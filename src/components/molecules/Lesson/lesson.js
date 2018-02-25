import React, { Component } from 'react'
import NameTag from "../../atoms/NameTag";
import {connect} from "react-redux";
import {compose} from "redux";
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import {add_user} from "../../../actions/actionCreators/lesson";
import {ItemTypes as itemTypes} from "../../../constatnts/itemType";
import { DropTarget } from 'react-dnd';
import {LESSON_HEIGHT, LESSON_WIDTH} from "../../../helper/lesson";
import LessonTitle from "../../atoms/LessonTitle/index";
import LessonSubTitle from "../../atoms/LessonSubTitle/index";

const data = {
	grade: '中２',
	subject: '集団数学',
	teachers: [
		{
			id: 1,
			name: "竹内 悠人",
		}
	],
	students: [
		{
			id: 1,
			name: "和田 知樹"
		},
		{
			id: 2,
			name: "天羽 圭介"
		},
	]
}

const canAddStudent = (students, id) => {
	return students.filter((student) => student.id === id).length <= 0
}

const squareTarget = {
	drop(props, monitor) {
		const {id, name} = monitor.getItem()
		props.add_user({id: id, name: name}, props.lesson.lessonId)
	},
	canDrop(props, monitor) {
		const {id} = monitor.getItem()
		return canAddStudent(props.lesson.students, id)
	}
};

const collect = (connect, monitor) => {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
	};
}

const styles = theme => ({
	container: {
		width: LESSON_WIDTH,
		minHeight: LESSON_HEIGHT,
		padding: 10,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	blue: {
		backgroundColor: 'rgb(65, 180, 255)',
		border: '4px solid rgb(0, 110, 191)'
	},
	orange: {
		backgroundColor: 'rgb(255, 182, 57)',
		border: '4px solid rgb(255, 147, 0)'
	},
	nameTag: {
		marginBottom: theme.spacing.unit,
	},
	studentContainer: {
		width: '100%'
	},
	otherCount: {
		textAlign: 'center',
		color: '#FFF',
	}
})

class Lesson extends Component {
	constructor(props) {
		super(props)
	}

	renderMember(nameTags) {
		const { classes } = this.props
		return (
			<div className={classes.studentContainer}>
				{nameTags[0]}
				<p className={classes.otherCount}
				>{`他${nameTags.length - 1}名`}</p>
			</div>
		)
	}

	render() {
		const {
			color,
			lesson,
			connectDropTarget,
			classes
		} = this.props

		const teachers = lesson.teachers.map((teacher, i) => <NameTag key={i} user={teacher} className={classes.nameTag}/>)
		const studentsList = lesson.students.map((student, i) => <NameTag key={i} user={student} className={classes.nameTag}/>)

		const className = classNames(
			classes.container,
			{
				[classes.blue]: color === 'blue',
				[classes.orange]: color === 'orange',
			},
		)

		return connectDropTarget(
			<div className={className}>
				<LessonTitle grade={lesson.grade} subject={lesson.subject}/>
				<LessonSubTitle text="講師"/>
				{teachers}
				<LessonSubTitle text="生徒"/>
				{studentsList.length <= 2 &&
					studentsList
				}
				{studentsList.length >= 3 &&
					this.renderMember(studentsList)
				}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		grade: state.lesson.grade,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		add_user: (student, toLessonId) => {
			dispatch(add_user(student, toLessonId))
		}
	}
}

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
	DropTarget(itemTypes.SUBJECT, squareTarget, collect),
)(Lesson)
