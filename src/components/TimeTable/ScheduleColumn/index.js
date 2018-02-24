import React, { Component } from 'react';
import {LESSON_WIDTH, LESSON_HEIGHT, getPosition} from "../../../helper/lesson";
import {ItemTypes as itemTypes} from "../../../constatnts/itemType";
import { DropTarget } from 'react-dnd';

const squareTarget = {
	drop(props, monitor) {
		const {boothId, time} = props
		return {
			startTime: time,
			boothId: boothId,
		}
	},
	canDrop(props, monitor) {
		return true
	}
};

const collect = (connect, monitor) => {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
	};
}

class ScheduleColumn extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { connectDropTarget, isOver, time } = this.props
		return connectDropTarget(
			<div style={{
				width: LESSON_WIDTH,
				height: LESSON_HEIGHT / 2,
				backgroundColor: '#CCC'
			}}>
				{time}
				{`top: ${getPosition(time)}`}
			</div>
		)
	}
}

export default DropTarget(itemTypes.LESSON, squareTarget, collect)(ScheduleColumn)
