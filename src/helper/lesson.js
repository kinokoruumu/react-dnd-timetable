import moment from "moment";

const START_POSITION = 38
const LESSON_WIDTH = 180
const LESSON_HEIGHT = 238
const LESSON_MARGIN = 12
const SCHEDULE_POSITIONS = [
	{
		start: "16:00",
		position: 0,
	},
	{
		start: "16:30",
		position: LESSON_HEIGHT / 2,
	},
	{
		start: "17:00",
		position: LESSON_HEIGHT + LESSON_MARGIN,
	},
	{
		start: "17:30",
		position: LESSON_HEIGHT + LESSON_MARGIN + LESSON_HEIGHT / 2,
	},
	{
		start: "18:00",
		position: LESSON_HEIGHT*2 + LESSON_MARGIN*2,
	},
	{
		start: "18:30",
		position: LESSON_HEIGHT*2 + LESSON_MARGIN*2 + LESSON_HEIGHT / 2,
	},
	{
		start: "19:00",
		position: LESSON_HEIGHT*3 + LESSON_MARGIN*3,
	},
	{
		start: "19:30",
		position: LESSON_HEIGHT*3 + LESSON_MARGIN*3 + LESSON_HEIGHT / 2,
	},
	{
		start: "20:00",
		position: LESSON_HEIGHT*4 + LESSON_MARGIN*4,
	},
	{
		start: "20:30",
		position: LESSON_HEIGHT*4 + LESSON_MARGIN*4 + LESSON_HEIGHT / 2,
	},
]

const getPosition = (start) => {
	const positon = SCHEDULE_POSITIONS.filter((schedulePosition) => schedulePosition.start === start)
	return START_POSITION + positon[0].position
}

export {
	START_POSITION,
	LESSON_WIDTH,
	LESSON_HEIGHT,
	LESSON_MARGIN,
	SCHEDULE_POSITIONS,
	getPosition
}