import React, { Component } from 'react';
import Lesson from "../../Lesson";
import {connect} from "react-redux";

class BoothSchedule extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {boothNo} = this.props
		const lessons = this.props.lessons.map((lesson) => {
			return (
				<div
					key={lesson.lessonId}
					style={{
						marginBottom: 12,
					}}
				>
					<Lesson color="blue" lesson={lesson}/>
				</div>
			)
		})

		return (
			<div style={{
				padding: '0 10px',
			}}>
				<div style={{
					backgroundColor: '#fcfcfc',
					border: '1px solid #f2f2f2',
					padding: 6
				}}>
					<p
						style={{
							textAlign: 'center',
							fontWeight: 'bold',
							color: '#797979'
						}}
					>
						{`ブース ${boothNo}`}
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