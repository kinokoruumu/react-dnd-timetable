import moment from "moment";

const START_POSITION = 38
const LESSON_HEIGHT = 244
const SCHEDULE_POSITIONS = [
	{
		start: "16:00",
		position: 0,
	},
	{
		start: "17:00",
		position: LESSON_HEIGHT,
	},
	{
		start: "18:00",
		position: LESSON_HEIGHT*2,
	},
	{
		start: "19:00",
		position: LESSON_HEIGHT*3,
	},
	{
		start: "20:00",
		position: LESSON_HEIGHT*4,
	},
]

const getPosition = (start) => {
	const startTime = moment(start).format("HH:mm")
	const positon = SCHEDULE_POSITIONS.filter((schedulePosition) => schedulePosition.start === startTime)
	return START_POSITION + positon[0].position
}

export {
	START_POSITION,
	LESSON_HEIGHT,
	SCHEDULE_POSITIONS,
	getPosition
}