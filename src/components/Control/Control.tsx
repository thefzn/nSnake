import React, { FC } from 'react'
import Controller from './presentational/Controller'
import DirectionPad from './presentational/DirectionPad'
import MainControl from './presentational/MainControl'
import { Controller as ControllerType } from 'abstract/Types'

const Control: FC<{ controls: ControllerType }> = ({
	controls: { up, down, left, right, pause, removeSnake },
}) => (
	<Controller>
		<DirectionPad up={up} down={down} left={left} right={right} />
		<MainControl pause={pause} removeSnake={removeSnake} />
	</Controller>
)

export default Control
