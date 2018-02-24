import React, { Component } from 'react';
import Lesson from "../../Lesson";
import {connect} from "react-redux";

class BoothSchedule extends Component {
	constructor(props) {
		super(props)
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
