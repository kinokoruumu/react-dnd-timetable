import React, { Component } from 'react'
import Knight from './Knight'
import {connect} from "react-redux"
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import {compose} from "redux";
import BoardSquare from "./BoardSquare";

class Board extends Component {
	constructor(props) {
		super(props)
	}

	renderSquare(i) {
		const x = i % 8;
		const y = Math.floor(i / 8);
		return (
			<div key={i}
					 style={{ width: '12.5%', height: '12.5%' }}>
				<BoardSquare x={x}
										 y={y}>
					{this.renderPiece(x, y)}
				</BoardSquare>
			</div>
		);
	}

	renderPiece(x, y) {
		const [knightX, knightY] = this.props.knightPosition;
		if (x === knightX && y === knightY) {
			return <Knight />;
		}
	}

	render() {
		const squares = []
		for (let i = 0; i < 64; i++) {
			squares.push(this.renderSquare(i))
		}

		return (
			<div style={{
				width: '600px',
				height: '600px',
				display: 'flex',
				flexWrap: 'wrap'
			}}>
				{squares}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		knightPosition: state.knight.position
	}
}

export default compose(
	DragDropContext(HTML5Backend),
	connect(mapStateToProps),
)(Board)
