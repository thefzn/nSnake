import React, { FC } from 'react'
import Button from 'components/atoms/Button'
import GreyArea from 'components/atoms/GreyArea'
import MainControlWrapper from 'components/atoms/MainControlWrapper'
import { Controller } from 'game/Types'

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
