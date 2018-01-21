import React, { Component } from 'react';
import Lesson from "../Lesson";
import {connect} from "react-redux";

class TimeTable extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const lessons = this.props.lessons.map((lesson) => <Lesson key={lesson.lessonId} color="blue" lesson={lesson}/>)
		return (
			<div style={{
				display: 'flex',
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