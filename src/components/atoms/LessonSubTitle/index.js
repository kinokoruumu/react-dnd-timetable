import React from 'react'

const LessonSubTitle = (props) => (
	<p style={styles.subTitle}>{props.text}</p>
)

const styles = {
	subTitle: {
		width: '100%',
		padding: '7px 0 5px',
		color: '#FFF',
	},
}

export default LessonSubTitle
