import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd';
import {ItemTypes as itemTypes} from "../../constatnts/itemType";
import ChildLesson from "./Lesson";
import {connect} from "react-redux";
import {getPosition} from "../../helper/lesson";
import {compose} from "redux";

const lessonSource = {
	beginDrag(props) {
		console.log(props)
		return {}
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
	}

	render() {
		const { connectDragSource, isDragging, lesson } = this.props;
		return connectDragSource(
			<div
				key={lesson.lessonId}
				style={{
					position: 'absolute',
					top: getPosition(lesson.schedule.start),
					left: 0,
					marginBottom: 12,
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
	return {}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	DragSource(itemTypes.LESSON, lessonSource, collect),
)(Lesson)
