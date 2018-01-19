import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Name from "./Name";

export default class NameTag extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {name} = this.props
		return (
			<div
				style={{marginBottom: 6, width: '100%'}}
			>
				<Name name={name}/>
			</div>
		)
	}
}

NameTag.propTypes = {
	name: PropTypes.string.isRequired,
}
