import { styled } from 'linaria/react'
import COLOR from 'components/abstract/colors.json'

const grid = styled.div`
	background-color: rgb(${COLOR.WHITE});
	background-image: radial-gradient(
		100% 130% at 50% 0%,
		transparent 40%,
		rgb(${COLOR.GREY}) 120%
	);
	border-top: 1px solid rgba(${COLOR.GREY}, 0.5);
	border-left: 1px solid rgba(${COLOR.GREY}, 0.5);
	box-shadow: 7px 7px 8px rgba(185, 68, 0, 0.3),
		12px 12px 15px rgba(185, 0, 0, 0.2);
	display: flex;
	flex-wrap: wrap;
	width: fit-content;
`

export default grid
