import { styled } from 'linaria/react'

const Button = styled.button`
	background-color: #4d4d4d;
	border: 0;
	border-radius: 20px;
	box-shadow: inset 0 2px 2px 0 #272727, inset -2px 0px 2px 2px #4d4d4d,
		inset 0px 1px 1px 2px #8d8d8d, 2px 2px 4px 1px #92928f;
	cursor: pointer;
	height: 15px;
	margin: 13px 0;
	outline: none !important;
	transition: box-shadow 0.3s;
	width: 40px;

	&.--pressed,
	&:active {
		box-shadow: inset 0 2px 2px 0 #272727, inset 0px -1px 3px 0px #4d4d4d,
			inset -2px -2px 3px 0px #707070;
	}
`

export default Button
