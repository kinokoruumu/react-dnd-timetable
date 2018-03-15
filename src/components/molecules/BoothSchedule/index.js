import React, { Component } from 'react';
import Lesson from "../Lesson/index";
import {connect} from "react-redux";
import ScheduleColumn from "../../atoms/ScheduleColumn/index";
import {END_TIME, INTERVAL, LESSON_MARGIN, START_TIME} from "../../../helper/lesson";
import { DragLayer } from 'react-dnd';
import {compose} from "redux";

const collect = (monitor) => {
	return {
		isDragging: monitor.isDragging()
	};
}

class BoothSchedule extends Component {
	constructor(props) {
		super(props)
	}

	renderHourColumn(key, boothId, time) {
		const scheduleColumns = []
		for (let i = 0; i < 60 / INTERVAL; i++){
			let last = false
			if (i+1 === 60 / INTERVAL) {
				last = true
			}
			scheduleColumns.push(
				<ScheduleColumn
					boothId={boothId}
					time={`${time}:${String((INTERVAL*i)).padStart(2, 0)}`}
					key={i}
					last={last}
				/>
			)
		}
		return (
			<div key={key} style={{marginBottom: LESSON_MARGIN}}>
				{scheduleColumns}
			</div>
		)
	}

	renderScheduleColumns(boothId) {
		const start = START_TIME.hour
		const end = END_TIME.hour
		if (end <= start) {
			console.error("開始時間が終了時間を上回っています。")
		}
		let items = []
		for (let i = 0; i < end - start; i++) {
			const time = parseInt(start) + i
			items.push(this.renderHourColumn(i, boothId, time))
		}
		return (
			<div>
				{items}
			</div>
		)
	}

	render() {
		const {boothId} = this.props
		const lessons = this.props.lessons.map((lesson) => {
			if (lesson.boothId === boothId) {
				return (
					<Lesson lesson={lesson} key={lesson.lessonId} />
				)
			}
		})

		return (
			<div style={{
				margin: '0 10px',
				position: 'relative'
			}}>
				<div style={{
					backgroundColor: '#fcfcfc',
					border: '1px solid #f2f2f2',
					padding: 6,
					minWidth: 180,
				}}>
					<p
						style={{
							textAlign: 'center',
							fontWeight: 'bold',
							color: '#797979'
						}}
					>
						{`ブース ${boothId}`}
					</p>
				</div>
				{lessons}
				{this.renderScheduleColumns(boothId)}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		lessons: state.lesson.lessons
	}
}

const mapDispatchToProps = dispatch => {
	return {}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	DragLayer(collect)
)(BoothSchedule)
