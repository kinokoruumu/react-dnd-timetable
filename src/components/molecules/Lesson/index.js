import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import { DragSource } from 'react-dnd'
import {ItemTypes as itemTypes} from "../../../constatnts/itemType"
import ChildLesson from "./lesson"
import {connect} from "react-redux"
import {getPosition} from "../../../helper/lesson"
import {compose} from "redux"
import moment from "moment"
import {change_start_time} from "../../../actions/actionCreators/lesson"

const lessonSource = {
	beginDrag(props) {
		return {}
	},
	endDrag(props, monitor) {
		const {lesson, changeStartTime} = props
		if (!monitor.getDropResult()) {
			return
		}
		const {boothId, startTime} = monitor.getDropResult()
		changeStartTime(lesson.lessonId, boothId, startTime)
	}
}

const collect = (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
	}
}

const styles = theme => ({
	container: {},
})

class Lesson extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {
			connectDragSource,
			isDragging,
			lesson,
			classes
		} = this.props
		return connectDragSource(
			<div
				key={lesson.lessonId}
				style={{
					position: 'absolute',
					top: getPosition(moment(lesson.schedule.start).format("HH:mm")),
					left: 0,
					marginBottom: 12,
					display: isDragging ? 'none' : 'block',
				}}
			>
				<ChildLesson color="blue" lesson={lesson}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {}
}

const mapDispatchToProps = dispatch => {
	return {
		changeStartTime: (lessonId, boothId, time) => {
			dispatch(change_start_time(lessonId, boothId, time))
		}
	}
}

export default compose(
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
	DragSource(itemTypes.LESSON, lessonSource, collect),
)(Lesson)
