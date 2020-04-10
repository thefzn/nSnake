import React, { FC } from 'react'
import { useGame } from 'hooks'

import GlobalErrorBoundary from 'components/GlobalErrorBoundary'

const Game: FC = () => {
	const game: JSX.Element = useGame([20, 20])
	return <GlobalErrorBoundary>{game}</GlobalErrorBoundary>
}

export default Game
