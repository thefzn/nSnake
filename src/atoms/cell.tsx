import { styled } from 'linaria/react'
import COLOR from 'atoms/colors.json'
import SIZE from 'atoms/sizes.json'
import TIME from 'atoms/time.json'

const cell = styled.div`
	border-right: 1px solid rgba(${COLOR.GREY}, 0.5);
	border-bottom: 1px solid rgba(${COLOR.GREY}, 0.5);
	box-sizing: border-box;
	display: block;
	height: ${SIZE.MD};
	width: ${SIZE.MD};
	position: relative;

	&:before {
		box-shadow: ${SIZE.SM} ${SIZE.SM} ${SIZE.SM} 0 rgba(${COLOR.MAIN}, 0);
		content: '';
		display: block;
		height: ${SIZE.MD};
		left: 0;
		opacity: 0;
		position: absolute;
		top: 0;
		transition: ${TIME.XL};
		width: ${SIZE.MD};
	}
	&.cell--active {
		&:before {
			/* animation-duration: ${TIME.LG};
			animation-iteration-count: infinite;
			animation-name: pulse;
			animation-timing-function: ease-in-out; */
			box-shadow: ${SIZE.XS} ${SIZE.XS} ${SIZE.XS} 0 rgba(${COLOR.MAIN}, 0.1);
			opacity: 1;
			transform: translate(-${SIZE.XS}, -${SIZE.XS});
			transition: none;
		}
	}

	&.--user:before {
		background-color: rgba(${COLOR.MAIN}, 1);
	}
	&.--fruit:before {
		background-color: rgba(${COLOR.PURPLE}, 1);
		box-shadow: ${SIZE.XS} ${SIZE.XS} ${SIZE.XS} 0 rgba(${COLOR.PURPLE}, 0.1);
	}
	&.--dead:before {
		background-color: rgba(${COLOR.GREY}, 1);
		box-shadow: ${SIZE.XS} ${SIZE.XS} ${SIZE.XS} 0px rgba(${COLOR.MAIN}, 0.3);
		opacity: 0.9;
		transform: translate(-${SIZE.SSM}, -${SIZE.SSM});
	}
	&.--npc1:before {
		background-color: rgba(${COLOR.BLUE}, 1);
	}
	&.--npc2:before {
		background-color: rgba(${COLOR.LIME}, 1);
	}
	&.--npc3:before {
		background-color: rgba(${COLOR.AMBER}, 1);
	}
	&.--npc4:before {
		background-color: rgba(${COLOR.GREEN}, 1);
	}
	&.--npc5:before {
		background-color: rgba(${COLOR.INDIGO}, 1);
	}
	&.--npc6:before {
		background-color: rgba(${COLOR.TEAL}, 1);
	}
	&.--npc7:before {
		background-color: rgba(${COLOR.ORANGE}, 1);
	}
	&.--npc8:before {
		background-color: rgba(${COLOR.PINK}, 1);
	}
	&.--npc9:before {
		background-color: rgba(${COLOR.BROWN}, 1);
	}
	@keyframes pulse {
		50% {
			box-shadow: ${SIZE.SSM} ${SIZE.SSM} ${SIZE.SSM} 0px
				rgba(${COLOR.MAIN}, 0.1);
			transform: translate(-${SIZE.SSM}, -${SIZE.SSM});
		}
	}
`

export default cell
