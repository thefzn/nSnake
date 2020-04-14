import { styled } from 'linaria/react'
import COLOR from './colors.json'

const grid = styled.div`
	border-top: 1px solid rgba(${COLOR.GREY}, 0.5);
	border-left: 1px solid rgba(${COLOR.GREY}, 0.5);
	display: flex;
	flex-wrap: wrap;
	width: fit-content;
`

export default grid
