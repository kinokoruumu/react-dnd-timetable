import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Paper} from "material-ui";
import { DragSource } from 'react-dnd';
import {ItemTypes as itemTypes} from "../../constatnts/itemType";

const nameTagSource = {
	beginDrag(props) {
		return {};
	}
};

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}

class Name extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { connectDragSource, isDragging } = this.props;
		const {name} = this.props
		return connectDragSource(
			<div>
				<Paper style={{
					// width: '150px',
					height: 30,
					textAlign: 'center',
					lineHeight: '30px',
					color: 'rgb(109, 109, 109)',
					cursor: 'move',
				}} zDepth={1}>
					{name}
				</Paper>
			</div>
		)
	}
}

Name.propTypes = {
	name: PropTypes.string.isRequired,
	connectDragSource: PropTypes.func.isRequired,
	isDragging: PropTypes.bool.isRequired
}

export default DragSource(itemTypes.SUBJECT, nameTagSource, collect)(Name);
