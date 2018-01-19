import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import NameList from "../NameList";
import TimeTable from "../TimeTable";

class TimeTablePage extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div
				style={{
					display: 'flex',
				}}
			>
				<NameList/>
				<TimeTable/>
			</div>
		)
	}
}

export default DragDropContext(HTML5Backend)(TimeTablePage);
