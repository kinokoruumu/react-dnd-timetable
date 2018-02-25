import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import NameList from "../../molecules/NameList/index";
import TimeTable from "../../organisms/TimeTable/index";

class TimeTablePage extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<div style={{
					display: 'flex',
				}}>
					<NameList/>
					<TimeTable/>
				</div>
			</div>
		)
	}
}

export default DragDropContext(HTML5Backend)(TimeTablePage);
