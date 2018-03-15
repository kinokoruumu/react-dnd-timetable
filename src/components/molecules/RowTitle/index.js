import React from 'react'
import {LESSON_HEIGHT, LESSON_MARGIN} from "../../../helper/lesson";

const RowTitle = (props) => (
	<div style={{
		height: LESSON_HEIGHT + LESSON_MARGIN,
	}}>
		<p style={{
			fontSize: 16,
			textAlign: 'center',
			color: '#797979'
		}}>{props.time}</p>
		{
			props.molecule && props.denominator &&
			<p style={{
				padding: '3px 5px',
				backgroundColor: '#009b8b',
				whiteSpace: 'nowrap',
				color: '#FFF',
				fontSize: 14,
				borderRadius: 5,
				textAlign: 'center',
			}}>{`${props.molecule}人/${props.denominator}人`}</p>
		}
	</div>
)

export default RowTitle
