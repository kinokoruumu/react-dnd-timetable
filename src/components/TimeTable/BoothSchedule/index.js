import React, { Component } from 'react';
import Lesson from "../../Lesson";
import {connect} from "react-redux";
import moment from "moment";

const START_POSITION = 38
const LESSON_HEIGHT = 244
const schedulePositions = [
	{
		start: "16:00",
		position: 0,
	},
	{
		start: "17:00",
		position: LESSON_HEIGHT,
	},
	{
		start: "18:00",
		position: LESSON_HEIGHT*2,
	},
	{
		start: "19:00",
		position: LESSON_HEIGHT*3,
	},
	{
		start: "20:00",
		position: LESSON_HEIGHT*4,
	},
]

class BoothSchedule extends Component {
	constructor(props) {
		super(props)
	}

	getPosition(start) {
		const startTime = moment(start).format("HH:mm")
		const positon = schedulePositions.filter((schedulePosition) => schedulePosition.start === startTime)
		return START_POSITION + positon[0].position
	}

	renderLesson(lesson) {
		return (
			<div
				key={lesson.lessonId}
				style={{
					position: 'absolute',
					top: this.getPosition(lesson.schedule.start),
					left: 0,
					marginBottom: 12,
				}}
			>
				<Lesson color="blue" lesson={lesson}/>
			</div>
		)
	}

	render() {
		const {boothId} = this.props
		const lessons = this.props.lessons.map((lesson) => {
			if (lesson.boothId === boothId) {
				return (
					this.renderLesson(lesson)
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

export default connect(mapStateToProps, mapDispatchToProps)(BoothSchedule)