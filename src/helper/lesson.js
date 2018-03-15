import moment from "moment";

const START_POSITION = 38
const LESSON_WIDTH = 180
const LESSON_HEIGHT = 238
const LESSON_MARGIN = 12
const LESSON_START_TIME = "16:00"
const LESSON_END_TIME = "24:00"
const INTERVAL = "30"

let SCHEDULE_POSITIONS = []
const START_TIME = {
	hour: LESSON_START_TIME.split(":")[0],
	minute: LESSON_START_TIME.split(":")[1]
}
const END_TIME = {
	hour: LESSON_END_TIME.split(":")[0],
	minute: LESSON_END_TIME.split(":")[1]
}
let tmpMoment = moment(START_TIME)

let i = 0
while (tmpMoment.isBefore(moment(END_TIME))) {
	if (i !== 0) tmpMoment = tmpMoment.add(INTERVAL, 'm')
	const ratio = 60 / INTERVAL
	SCHEDULE_POSITIONS.push({
		start: tmpMoment.format("HH:mm"),
		position: LESSON_HEIGHT*(Math.floor(i / ratio)) + LESSON_MARGIN*(Math.floor(i / ratio)) + (LESSON_HEIGHT / ratio) * (i % ratio),
	})
	i++
}

const getPosition = (start) => {
	const position = SCHEDULE_POSITIONS.filter((schedulePosition) => schedulePosition.start === start)
	return START_POSITION + position[0].position
}

export {
	START_POSITION,
	LESSON_WIDTH,
	LESSON_HEIGHT,
	LESSON_MARGIN,
	START_TIME,
	END_TIME,
	SCHEDULE_POSITIONS,
	INTERVAL,
	getPosition
}