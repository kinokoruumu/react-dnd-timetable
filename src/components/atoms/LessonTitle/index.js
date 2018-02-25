import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
	title: {
		textAlign: 'center',
		color: '#FFF',
	}
})

const LessonTitle = (props) => (
	<p className={props.classes.title}>{props.grade} {props.subject}</p>
)

export default withStyles(styles)(LessonTitle)
