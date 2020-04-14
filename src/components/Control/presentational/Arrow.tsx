import { styled } from 'linaria/react'

const Arrow = styled.li`
	border-radius: 3px;
	cursor: pointer;
	display: flex;
	z-index: 3;

	&:before {
		border-radius: 4px;
		content: '';
		display: block;
	}
`

export default Arrow
