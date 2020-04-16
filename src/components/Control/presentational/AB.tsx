import React, { FC } from 'react'
import ABWrapper from './ABWrapper'
import ABBtn from './ABBtn'
import { Controller } from 'abstract/Types'

const AB: FC<Partial<Controller>> = ({ addSnake, addKiller }) => (
	<ABWrapper>
		<ABBtn action={addSnake} label="A" />
		<ABBtn action={addKiller} label="B" />
	</ABWrapper>
)

export default AB
