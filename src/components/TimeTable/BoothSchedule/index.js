import React, { Component } from 'react';
import Lesson from "../../Lesson";
import {connect} from "react-redux";

class TimeTable extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const lessons = this.props.lessons.map((lesson) => {
			return (
				<div
					key={lesson.lessonId}
					style={{
						marginBottom: 5,
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

export default connect(mapStateToProps, mapDispatchToProps)(TimeTable)