import React, { FC } from 'react'
import AB from './presentational/AB'
import Controller from './presentational/Controller'
import DirectionPad from './presentational/DirectionPad'
import MainControl from './presentational/MainControl'
import SVGFilters from './presentational/SVGFilters'
import { Controller as ControllerType } from 'abstract/Types'

const Control: FC<{ controls: ControllerType }> = ({
	controls: { up, down, left, right, pause, resetGame, addSnake, addKiller },
}) => (
	<Controller>
		<SVGFilters />
		<DirectionPad up={up} down={down} left={left} right={right} />
		<MainControl pause={pause} resetGame={resetGame} />
		<AB addSnake={addSnake} addKiller={addKiller} />
	</Controller>
)

export default Control
