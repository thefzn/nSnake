import { styled } from 'linaria/react'

const ABBtnOuter = styled.button`
	background-color: #ca3129;
	background-image: radial-gradient(
			ellipse 100% 33% at 35% 50%,
			#ca3129 10%,
			transparent 40%
		),
		radial-gradient(ellipse 80% 60% at 62% 65%, #ea3832 20%, transparent 45%),
		radial-gradient(
			circle at 50% 59%,
			transparent 47%,
			#ea3832 57%,
			transparent 75%
		),
		radial-gradient(circle at 50% 55%, transparent 55%, black 81%);
	border-radius: 20px;
	border: 0;
	box-sizing: border-box;
	box-shadow: 2px 2px 6px #555;
	color: #ca3129;
	font-family: Arial;
	font-size: 16px;
	font-weight: 900;
	height: 40px;
	line-height: 110px;
	margin: auto auto;
	outline: none !important;
	overflow: visible;
	padding: 0;
	position: relative;
	text-align: right;
	text-indent: 32px;
	transition: 0.3s;
	width: 40px;

	&:before {
		border-radius: 50%;
		box-shadow: -1px -1px 1px rgba(255, 255, 255, 0.3);
		content: '';
		cursor: pointer;
		display: block;
		height: 88%;
		left: 2px;
		position: absolute;
		top: 5px;
		width: 88%;
	}
	&.--pressed,
	&:active {
		background-image: radial-gradient(
				ellipse 84% 98% at 50% 36%,
				transparent 55%,
				#331000 63%,
				black 100%
			),
			radial-gradient(circle at 50% 55%, transparent 55%, black 81%),
			radial-gradient(
				ellipse 100% 33% at 35% 40%,
				#ca3129 10%,
				transparent 40%
			),
			radial-gradient(
				ellipse 80% 60% at 62% 55%,
				#ea3832 20%,
				transparent 45%
			),
			radial-gradient(
				circle at 50% 49%,
				transparent 47%,
				#ea3832 57%,
				transparent 75%
			);
		box-shadow: none;

		&:before {
			box-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
			left: 2px;
			top: 3px;
		}
	}
`

export default ABBtnOuter
