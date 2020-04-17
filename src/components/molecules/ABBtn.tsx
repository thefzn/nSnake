import React, { FC } from 'react'
import ABBtnInner from 'components/atoms/ABBtnInner'
import ABBtnOuter from 'components/atoms/ABBtnOuter'

type Button = { action?: () => void; label: 'A' | 'B' }

const ABBtn: FC<Button> = ({ action, label }) => (
	<ABBtnOuter onClick={() => action && action()}>
		<ABBtnInner>{label}</ABBtnInner>
	</ABBtnOuter>
)

export default ABBtn
