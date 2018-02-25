import React from 'react'

const LessonTitle = (props) => (
	<p style={styles.title}>{props.grade} {props.subject}</p>
)

const styles = {
	title: {
		textAlign: 'center',
		color: '#FFF',
	},
}

export default LessonTitle
