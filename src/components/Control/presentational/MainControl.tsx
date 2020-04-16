import React, { FC } from 'react'
import Button from './Button'
import GreyArea from './GreyArea'
import MainControlWrapper from './MainControlWrapper'
import { Controller } from 'abstract/Types'

const MainControl: FC<Partial<Controller>> = ({ pause, resetGame }) => (
	<MainControlWrapper>
		<GreyArea />
		<GreyArea />
		<GreyArea>
			<span>Select</span>
			<span>Start</span>
		</GreyArea>
		<GreyArea className="--buttons">
			<Button onClick={() => resetGame && resetGame()} />
			<Button onClick={() => pause && pause()} />
		</GreyArea>
		<GreyArea />
	</MainControlWrapper>
)

export default MainControl
