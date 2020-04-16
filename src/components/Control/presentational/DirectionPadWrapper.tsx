import { styled } from 'linaria/react'

const DirectionPad = styled.ul`
	background-color: #484848;
	border-radius: 5px 0 0 5px;
	box-shadow: inset 50px 0px 50px rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	display: grid;
	grid-template-areas:
		'. a .'
		'b o c'
		'. d .';
	grid-template-columns: 32% 36% 32%;
	grid-template-rows: 32% 36% 32%;
	height: 100%;
	list-style: none;
	margin: 0;
	padding: 35px 15px 15px;
	width: 135px;

	.--up {
		grid-area: a;

		&:before {
			border-bottom-left-radius: 2.5px;
			border-bottom-right-radius: 2.5px;
			box-shadow: inset 1px 2px 0px #727272, 1px -2px 1px 1px #111113;
			height: 96%;
			margin: 8px auto -5px 4px;
			width: 75%;
		}
		&.--pressed,
		:active {
			transform: translate(1px, 1px);
			&:before {
				box-shadow: inset 1px 2px 0px #727272, 1px -2px 1px 1px #111113,
					1px -4px 6px 1px red;
				background-image: linear-gradient(
					180deg,
					rgba(255, 0, 0, 0.4),
					transparent
				);
			}
		}
		svg {
			left: 8px;
			top: 10px;
		}
	}
	.--right {
		grid-area: c;

		&:before {
			border-bottom-left-radius: 2.5px;
			border-top-left-radius: 2.5px;
			box-shadow: inset -1px -1px 0px #1b1b1b, inset -2px 0 3px #626262,
				2px 0px 1px 1px #111113;
			height: 75%;
			margin: 6px auto auto -7px;
			width: 95%;
		}
		&.--pressed,
		:active {
			transform: translate(1px, 1px);

			&:before {
				box-shadow: inset -1px -1px 0px #1b1b1b, inset -2px 0 3px #626262,
					2px 0px 1px 1px #111113, 5px 0px 6px 1px red;
				background-image: linear-gradient(
					-90deg,
					rgba(255, 0, 0, 0.4),
					transparent
				);
			}
		}
		svg {
			top: 8px;
		}
	}
	.--center {
		grid-area: o;
	}
	.--down {
		grid-area: d;

		&:before {
			border-top-left-radius: 2.5px;
			border-top-right-radius: 2.5px;
			box-shadow: inset -1px -1px 0px #1b1b1b, inset 1px -3px 1px 1px #626262,
				2px 1px 2px 0px #111113;
			height: 96%;
			margin: -4px auto auto 4px;
			width: 76%;
		}
		&.--pressed,
		:active {
			transform: translate(1px, 1px);

			&:before {
				box-shadow: inset -1px -1px 0px #1b1b1b,
					inset 1px -3px 1px 1px #626262, 2px 1px 2px 0px #111113,
					2px 3px 5px 1px red;
				background-image: linear-gradient(
					0deg,
					rgba(255, 0, 0, 0.4),
					transparent
				);
			}
		}
		svg {
			left: 7px;
		}
	}
	.--left {
		grid-area: b;

		&:before {
			border-top-right-radius: 2.5px;
			box-shadow: inset 1px 1px 0px #727272, -1px -1px 1px 0px #111113;
			height: 78%;
			margin: 6px -5px auto auto;
			width: 91%;
		}
		&.--pressed,
		:active {
			transform: translate(1px, 1px);

			&:before {
				box-shadow: inset 1px 1px 0px #727272, -1px -1px 1px 0px #111113,
					-3px -1px 6px 1px red;
				background-image: linear-gradient(
					90deg,
					rgba(255, 0, 0, 0.4),
					transparent
				);
			}
		}
		svg {
			left: 10px;
			top: 8px;
		}
	}
	.--pad {
		height: 100px;
		width: 105px;
	}
	li {
		position: relative;

		svg {
			position: absolute;
		}
	}
`

export default DirectionPad
