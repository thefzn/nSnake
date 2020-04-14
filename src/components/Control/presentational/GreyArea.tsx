import { styled } from 'linaria/react'

const GreyArea = styled.li`
	background-color: #92928f;
	border-radius: 5px;
	color: #ca3129;
	display: flex;
	font-family: Arial;
	font-size: 10px;
	font-weight: 900;
	justify-content: space-around;
	line-height: 2;
	text-transform: uppercase;
	min-height: 20px;

	&:first-child {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	&:last-child {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	&.--buttons {
		background-color: #d8d7dd;
		border-radius: 3px;
		box-shadow: inset 0 0 0 3px #d8d7dd, inset 2px 2px 4px 1px #92928f,
			inset -2px -2px 1px 2px #efefef;
	}
`

export default GreyArea
