import { styled } from 'linaria/react'

const MainControlWrapper = styled.ul`
	background-color: #484848;
	background-image: linear-gradient(
		rgba(0, 0, 0, 0.1) 0,
		rgba(0, 0, 0, 0) 40px,
		rgba(0, 0, 0, 0) 110px,
		rgba(0, 0, 0, 0.1) 150px
	);
	box-sizing: border-box;
	display: flex;
	flex-flow: column;
	height: 100%;
	justify-content: space-between;
	list-style: none;
	margin: 0;
	padding: 0;
	width: 100px;
`

export default MainControlWrapper
