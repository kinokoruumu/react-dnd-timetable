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
				width: LESSON_WIDTH+20,
				height: LESSON_HEIGHT / 2,
				margin: '0 -10px',
				backgroundColor: isOver ? '#f5f5f5' : 'rgba(0, 0, 0, 0)',
				borderTop: time.split(":")[1] === "00" ? '2px solid #d4d3d3' : 'none',
				borderBottom: time.split(":")[1] === "00" ? '2px solid #f5f5f5' : 'none'
			}} />
		)
	}
}

export default DropTarget(itemTypes.LESSON, squareTarget, collect)(ScheduleColumn)
