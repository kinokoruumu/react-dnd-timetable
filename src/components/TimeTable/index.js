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
			<div>
				<h1 style={{
					fontSize: 30,
					color: '#797979'
				}}>201教室</h1>
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
					<BoothSchedule boothId={1}/>
					<BoothSchedule boothId={2}/>
					<BoothSchedule boothId={3}/>
					<BoothSchedule boothId={4}/>
					<BoothSchedule boothId={5}/>
				</div>
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