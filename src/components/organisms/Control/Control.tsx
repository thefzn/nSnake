import React, { FC } from 'react'
import AB from 'components/molecules/AB'
import ControlWrapper from 'components/atoms/ControlWrapper'
import DirectionPad from 'components/molecules/DirectionPad'
import MainControl from 'components/molecules/MainControl'
import SVGFilters from 'components/atoms/SVGFilters'
import { Controller as ControllerType } from 'game/Types'

const Control: FC<{ controls: ControllerType }> = ({
	controls: { up, down, left, right, pause, resetGame, addSnake, addKiller },
}) => (
	<ControlWrapper>
		<SVGFilters />
		<DirectionPad up={up} down={down} left={left} right={right} />
		<MainControl pause={pause} resetGame={resetGame} />
		<AB addSnake={addSnake} addKiller={addKiller} />
	</ControlWrapper>
)

export default Control
