import React, { Component } from 'react';
import {connect} from "react-redux";
import BoothSchedule from './BoothSchedule'

class TimeTable extends Component {
	constructor(props) {
		super(props)
	}

	renderRowTitle(time, molecule, denominator) {
		return (
			<div style={{
				height: 244,
			}}>
				<p style={{
					fontSize: 16,
					textAlign: 'center',
					color: '#797979'
				}}>{time}</p>
				<p style={{
					padding: '3px 5px',
					backgroundColor: '#009b8b',
					whiteSpace: 'nowrap',
					color: '#FFF',
					fontSize: 14,
					borderRadius: 5,
					textAlign: 'center',
				}}>{`${molecule}人/${denominator}人`}</p>
			</div>
		)
	}

	render() {
		return (
			<div style={{
				display: 'flex',
			}}>
				<div style={{
					paddingTop: 36,
				}}>
					{this.renderRowTitle("16:00", 14, 40)}
					{this.renderRowTitle("17:00", 9, 40)}
					{this.renderRowTitle("18:00", 15, 40)}
					{this.renderRowTitle("19:00", 9, 40)}
				</div>
				<BoothSchedule boothNo={1}/>
				<BoothSchedule boothNo={2}/>
				<BoothSchedule boothNo={3}/>
				<BoothSchedule boothNo={4}/>
				<BoothSchedule boothNo={5}/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {}
}

const mapDispatchToProps = dispatch => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeTable)