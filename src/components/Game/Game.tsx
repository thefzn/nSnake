import React, { FC } from 'react'
import Cell from 'abstract/Cell'
import CellComp from 'components/Cell'
import Control from 'components/Control'
import GameData from 'abstract/GameData'
import GlobalErrorBoundary from 'components/GlobalErrorBoundary'
import { GridEl, RowEl } from 'atoms'
import { Controller } from 'abstract/Types'
import { useGame, useControls } from 'hooks'

const Game: FC = () => {
	const game: GameData = useGame([20, 20])
	const controls: Controller = useControls(game)
	return (
		<GlobalErrorBoundary>
			<GridEl>
				{game.grid.map((col: Cell[], i: number) => (
					<RowEl key={`Col-${i}`}>
						{col.map((cell: Cell) => (
							<CellComp key={cell.id} className={cell.classes} />
						))}
					</RowEl>
				))}
			</GridEl>
			<Control controls={controls} />
		</GlobalErrorBoundary>
	)
}

export default Game
