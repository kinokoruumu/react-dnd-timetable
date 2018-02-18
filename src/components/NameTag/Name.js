import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Paper} from "material-ui";
import { DragSource } from 'react-dnd';
import {ItemTypes as itemTypes} from "../../constatnts/itemType";

const nameTagSource = {
	beginDrag(props) {
		return {
			id: props.user.id,
			name: props.user.name,
		};
	}
};

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
	}
}

class Name extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { connectDragSource, isDragging } = this.props;
		const {user} = this.props
		return connectDragSource(
			<div>
				<Paper style={{
					// width: '150px',
					height: 30,
					textAlign: 'center',
					lineHeight: '30px',
					color: 'rgb(109, 109, 109)',
					cursor: 'move',
					whiteSpace: 'nowrap',
				}} zDepth={1}>
					{user.name}
				</Paper>
			</div>
		)
	}
}

Name.propTypes = {
	user: PropTypes.object.isRequired,
	connectDragSource: PropTypes.func.isRequired,
	isDragging: PropTypes.bool.isRequired
}

export default DragSource(itemTypes.SUBJECT, nameTagSource, collect)(Name);
