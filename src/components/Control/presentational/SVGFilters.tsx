import React, { FC } from 'react'

const SVGFilters: FC = () => (
	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1 1">
		<defs>
			<linearGradient id="gradient" gradientTransform="rotate(75)">
				<stop offset="35%" stopColor="#252525"></stop>
				<stop offset="99%" stopColor="#626262"></stop>
			</linearGradient>
			<linearGradient id="arrowGradient" gradientTransform="rotate(75)">
				<stop offset="35%" stopColor="#252525"></stop>
				<stop offset="99%" stopColor="#626262"></stop>
			</linearGradient>
			<filter id="dropshadow">
				<feDropShadow
					dx="3"
					dy="3"
					stdDeviation="6"
					floodColor="#141414"
				></feDropShadow>
			</filter>
			<filter id="insideshadow">
				<feDropShadow
					stdDeviation="0"
					in="SourceAlpha"
					dx="3"
					dy="3"
					floodColor="#ffffff"
					floodOpacity="0.3"
					result="shineBase"
				/>
				<feComposite
					in="shineBase"
					in2="SourceAlpha"
					operator="out"
					result="shine"
				/>
				<feFlood floodColor="#000000" floodOpacity="0.4" result="bgColor" />
				<feComposite
					in="bgColor"
					in2="SourceAlpha"
					operator="in"
					result="bg"
				/>
				<feOffset dx="3" dy="3" in="SourceAlpha" result="shape" />
				<feGaussianBlur stdDeviation="4" in="shape" result="blurShape" />
				<feComposite
					in="SourceAlpha"
					in2="blurShape"
					operator="out"
					result="insideShadow"
				/>
				<feMerge>
					<feMergeNode in="bg" />
					<feMergeNode in="shine" />
					<feMergeNode in="insideShadow" />
					<feMergeNode in="insideShadow" />
				</feMerge>
			</filter>
		</defs>
	</svg>
)

export default SVGFilters
