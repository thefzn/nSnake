import React, { FC } from 'react'
import DirectionPadWrapper from 'components/atoms/DirectionPadWrapper'
import DirectionArrow from 'components/molecules/DirectionArrow'
import { Controller } from 'game/Types'

const Control: FC<Partial<Controller>> = ({ up, right, down, left }) => (
	<DirectionPadWrapper>
		<DirectionArrow pad />
		<DirectionArrow onClick={() => up && up()} up />
		<DirectionArrow onClick={() => left && left()} left />
		<DirectionArrow center />
		<DirectionArrow onClick={() => right && right()} right />
		<DirectionArrow onClick={() => down && down()} down />
	</DirectionPadWrapper>
)

export default Control
