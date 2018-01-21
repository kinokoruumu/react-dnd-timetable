import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Name from "./Name";

export default class NameTag extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {user} = this.props
		return (
			<div
				style={{marginBottom: 6, width: '100%'}}
			>
				<Name user={user}/>
			</div>
		)
	}
}

NameTag.propTypes = {
	user: PropTypes.object.isRequired,
}
