import React, { FC } from 'react'
import ABBtnInner from './ABBtnInner'
import ABBtnOuter from './ABBtnOuter'

type Button = { action?: () => void; label: 'A' | 'B' }

const ABBtn: FC<Button> = ({ action, label }) => (
	<ABBtnOuter onClick={() => action && action()}>
		<ABBtnInner>{label}</ABBtnInner>
	</ABBtnOuter>
)

export default ABBtn
