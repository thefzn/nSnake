import { styled } from 'linaria/react'
import TIME from 'components/abstract/time.json'

const row = styled.div`
	/* &:nth-child(5n) .cell--active {
		:nth-child(5n - 3)::before {
			animation-delay: ${TIME.XS};
		}
		:nth-child(5n - 2)::before {
			animation-delay: ${TIME.SM};
		}
		:nth-child(5n - 1)::before {
			animation-delay: ${TIME.MD};
		}
		:nth-child(5n)::before {
			animation-delay: ${TIME.LG};
		}
	}
	&:nth-child(5n - 4) .cell--active {
		:nth-child(5n - 4)::before {
			animation-delay: ${TIME.XS};
		}
		:nth-child(5n - 3)::before {
			animation-delay: ${TIME.SM};
		}
		:nth-child(5n - 2)::before {
			animation-delay: ${TIME.MD};
		}
		:nth-child(5n - 1)::before {
			animation-delay: ${TIME.LG};
		}
	}
	&:nth-child(5n - 3) .cell--active {
		:nth-child(5n - 4)::before {
			animation-delay: ${TIME.SM};
		}
		:nth-child(5n - 3)::before {
			animation-delay: ${TIME.MD};
		}
		:nth-child(5n - 2)::before {
			animation-delay: ${TIME.LG};
		}
		:nth-child(5n)::before {
			animation-delay: ${TIME.XS};
		}
	}
	&:nth-child(5n - 2) .cell--active {
		:nth-child(5n - 4)::before {
			animation-delay: ${TIME.MD};
		}
		:nth-child(5n - 3)::before {
			animation-delay: ${TIME.LG};
		}
		:nth-child(5n - 1)::before {
			animation-delay: ${TIME.XS};
		}
		:nth-child(5n)::before {
			animation-delay: ${TIME.SM};
		}
	}
	&:nth-child(5n - 1) .cell--active {
		:nth-child(5n - 4)::before {
			animation-delay: ${TIME.LG};
		}
		:nth-child(5n - 2)::before {
			animation-delay: ${TIME.XS};
		}
		:nth-child(5n - 1)::before {
			animation-delay: ${TIME.SM};
		}
		:nth-child(5n)::before {
			animation-delay: ${TIME.MD};
		}
	} */
`

export default row
