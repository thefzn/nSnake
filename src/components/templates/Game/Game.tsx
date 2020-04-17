import React, { FC } from 'react'
import Cell from 'game/Cell'
import CellEl from 'components/atoms/Cell'
import Control from 'components/organisms/Control'
import GameData from 'game/GameData'
import GlobalErrorBoundary from 'components/atoms/GlobalErrorBoundary'
import Grid from 'components/atoms/Grid'
import Row from 'components/atoms/Row'
import { Controller } from 'game/Types'
import { useGame, useControls } from 'hooks'

const Game: FC = () => {
	const game: GameData = useGame([20, 20])
	const controls: Controller = useControls(game)
	return (
		<GlobalErrorBoundary>
			<Grid>
				{game.grid.map((col: Cell[], i: number) => (
					<Row key={`Col-${i}`}>
						{col.map((cell: Cell) => (
							<CellEl key={cell.id} className={cell.classes} />
						))}
					</Row>
				))}
			</Grid>
			<Control controls={controls} />
		</GlobalErrorBoundary>
	)
}

export default Game
