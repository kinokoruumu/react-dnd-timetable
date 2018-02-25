import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
	subTitle: {
		width: '100%',
		padding: '7px 0 5px',
		color: '#FFF',
	},
})

const LessonSubTitle = (props) => (
	<p className={props.classes.subTitle}>{props.text}</p>
)

export default withStyles(styles)(LessonSubTitle)
