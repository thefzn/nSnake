import { styled } from 'linaria/react'

const Arrow = styled.li`
	border-radius: 3px;
	cursor: pointer;
	display: flex;
	transition: 0.3s;
	z-index: 3;

	&:before {
		border-radius: 4px;
		content: '';
		display: block;
		transition: 0.3s;
	}
`

export default Arrow
