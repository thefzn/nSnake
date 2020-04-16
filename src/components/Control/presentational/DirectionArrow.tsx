import React, { FC } from 'react'
import Arrow from './Arrow'
import Center from './Center'
import SVGPad from './SVGPad'
import SVGArrow from './SVGArrow'

type ArrowProps = {
	up?: boolean
	down?: boolean
	left?: boolean
	right?: boolean
	center?: boolean
	pad?: boolean
	onClick?: () => void | undefined
}

const DirectionArrow: FC<ArrowProps> = ({
	up,
	down,
	left,
	right,
	center,
	pad,
	...props
}) => {
	const style = right ? '--right' : down ? '--down' : left ? '--left' : '--up'
	return center ? (
		<Center className="--center" />
	) : pad ? (
		<SVGPad className="--pad" />
	) : (
		<Arrow className={style} {...props}>
			<SVGArrow up={up} down={down} left={left} right={right} />
		</Arrow>
	)
}

export default DirectionArrow
