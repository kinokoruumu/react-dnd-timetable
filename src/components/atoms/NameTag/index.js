import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Paper} from "material-ui";
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import { DragSource } from 'react-dnd';
import {ItemTypes as itemTypes} from "../../../constatnts/itemType";
import {compose} from "redux";

const nameTagSource = {
	beginDrag(props) {
		return {
			id: props.user.id,
			name: props.user.name,
		};
	}
};

const collect = (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
	}
}

const styles = theme => ({
	root: {
		width: '100%',
		minWidth: 150,
		height: 30,
		textAlign: 'center',
		lineHeight: '30px',
		color: 'rgb(109, 109, 109)',
		cursor: 'move',
		whiteSpace: 'nowrap',
	}
})

class NameTag extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {
			connectDragSource,
			classes,
			className: classNameProp,
			component: Component,
			user,
		} = this.props;

		const className = classNames(
			classes.root,
			classNameProp,
		);

		return connectDragSource(
			<Component className={className}>
				<Paper elevation={1}>
					{user.name}
				</Paper>
			</Component>
		)
	}
}

NameTag.propTypes = {
	user: PropTypes.object.isRequired,
	connectDragSource: PropTypes.func.isRequired,
}

NameTag.defaultProps = {
	component: 'div',
};

export default compose(
	withStyles(styles),
	DragSource(itemTypes.SUBJECT, nameTagSource, collect),
)(NameTag);
