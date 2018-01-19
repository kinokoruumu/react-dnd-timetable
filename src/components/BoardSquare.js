import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Square from './Square';
import {ItemTypes} from "../constatnts/itemType";
import {connect} from "react-redux";
import {move_knight} from "../actions/actionCreators/knight";
import {compose} from "redux";
import { DropTarget } from 'react-dnd';
import {canMoveKnight} from "../helper/knight";

const squareTarget = {
	canDrop(props) {
		const {x, y} = props
		return canMoveKnight(props.knightPosition, x, y)
	},
	drop(props) {
		props.move_knight(props.x, props.y);
	}
};

const collect = (connect, monitor) => {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	};
}

class BoardSquare extends Component {
	renderOverlay(color) {
		return (
			<div style={{
				position: 'absolute',
				top: 0,
				left: 0,
				height: '100%',
				width: '100%',
				zIndex: 1,
				opacity: 0.5,
				backgroundColor: color,
			}} />
		)
	}

	render() {
		const { x, y, connectDropTarget, isOver, canDrop } = this.props;
		const black = (x + y) % 2 === 1;

		return connectDropTarget(
			<div style={{
				position: 'relative',
				width: '100%',
				height: '100%'
			}}>
				<Square black={black}>
					{this.props.children}
				</Square>
				{isOver && !canDrop && this.renderOverlay('red')}
				{!isOver && canDrop && this.renderOverlay('yellow')}
				{isOver && canDrop && this.renderOverlay('green')}
			</div>
		);
	}
}

BoardSquare.propTypes = {
	x: PropTypes.number.isRequired,
	y: PropTypes.number.isRequired,
	connectDropTarget: PropTypes.func.isRequired,
	isOver: PropTypes.bool.isRequired,
	canDrop: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		knightPosition: state.knight.position
	}
}

const mapDispatchToProps = dispatch => {
	return {
		move_knight: (toX, toY) => {
			dispatch(move_knight(toX, toY))
		}
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	DropTarget(ItemTypes.KNIGHT, squareTarget, collect),
)(BoardSquare)
