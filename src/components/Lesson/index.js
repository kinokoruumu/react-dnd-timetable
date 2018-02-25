import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd';
import {ItemTypes as itemTypes} from "../../constatnts/itemType";
import ChildLesson from "./Lesson";
import {connect} from "react-redux";
import {getPosition} from "../../helper/lesson";
import {compose} from "redux";
import moment from "moment";
import {change_start_time} from "../../actions/actionCreators/lesson";

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
};

const collect = (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
	}
}

class Lesson extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hoge: false
		}
	}

	render() {
		const { connectDragSource, isDragging, lesson } = this.props;
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
	connect(mapStateToProps, mapDispatchToProps),
	DragSource(itemTypes.LESSON, lessonSource, collect),
)(Lesson)
