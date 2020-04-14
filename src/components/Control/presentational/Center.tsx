import { styled } from 'linaria/react'

const Center = styled.li`
	background-color: rgb(20, 20, 20);
	background-image: radial-gradient(
			ellipse 40% 60% at 50% 33%,
			rgba(204, 204, 204, 1) 10%,
			rgba(20, 20, 20, 1) 15%,
			rgba(20, 20, 20, 1) 22%,
			rgba(20, 20, 20, 0) 35%
		),
		radial-gradient(
			ellipse 55% 85% at 70% 50%,
			rgb(204, 204, 204) 29%,
			rgb(20, 20, 20) 36%,
			rgb(10, 10, 10) 100%
		);
	border-bottom: #000;
	border-left: #000;
	border-radius: 100%;
	box-shadow: 1px 0px 0px 0px #555, 0px 0px 15px 0px #262626;
	content: '';
	display: block;
	height: 70%;
	margin: auto auto;
	transform: rotate(45deg);
	width: 70%;
`

export default Center
