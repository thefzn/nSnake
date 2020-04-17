import React, { FC } from 'react'
import ABWrapper from 'components/atoms/ABWrapper'
import ABBtn from 'components/molecules/ABBtn'
import { Controller } from 'game/Types'

const AB: FC<Partial<Controller>> = ({ addSnake, addKiller }) => (
	<ABWrapper>
		<ABBtn action={addSnake} label="A" />
		<ABBtn action={addKiller} label="B" />
	</ABWrapper>
)

export default AB
