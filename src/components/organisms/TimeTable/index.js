import React, { Component } from 'react';
import {connect} from "react-redux";
import BoothSchedule from '../../molecules/BoothSchedule/index'
import {START_POSITION, START_TIME, END_TIME} from "../../../helper/lesson";
import RowTitle from "../../molecules/RowTitle";

class TimeTable extends Component {
	constructor(props) {
		super(props)
	}

	renderRowTitles() {
		const rowTitles = []
			for (let i = 0; i < END_TIME.hour - START_TIME.hour; i++) {
				rowTitles.push(
					<RowTitle
						time={`${parseInt(START_TIME.hour) + i}:00`}
						molecule={14}
						denominator={40}
						key={i}
					/>
				)
			}
		return (
			<div style={{
				paddingTop: START_POSITION,
			}}>
				{rowTitles}
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
					{this.renderRowTitles()}
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