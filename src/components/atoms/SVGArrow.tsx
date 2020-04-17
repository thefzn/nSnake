import React, { FC } from 'react'

type Arrow = {
	up?: boolean
	down?: boolean
	left?: boolean
	right?: boolean
}

const SVGArrow: FC<Arrow> = ({ down, left, right }) => {
	const transform = down
		? 'rotate(180 61.5 45.5)'
		: left
		? 'rotate(270 61.5 45.5)'
		: right
		? 'rotate(90 61.5 45.5)'
		: ''
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			version="1.1"
			viewBox="0 0 123 93"
			height="22"
			width="22"
		>
			<g filter="url(#insideshadow)">
				<path
					d=" M 0 50 L 20 50 L 20 90 L 100 90 L 100 50 L 120 50 L 60 0 L 0 50 Z "
					transform={transform}
					strokeWidth="5"
					stroke="black"
				/>
			</g>
		</svg>
	)
}

export default SVGArrow
