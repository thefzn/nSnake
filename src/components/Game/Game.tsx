import React, { FC } from 'react'
import Cell from 'abstract/Cell'
import CellComp from 'components/Cell'
import GameData from 'abstract/GameData'
import GlobalErrorBoundary from 'components/GlobalErrorBoundary'
import { GridEl, RowEl } from 'atoms'
import { useGame } from 'hooks'

const Game: FC = () => {
	const game: GameData = useGame([20, 20])
	return (
		<GlobalErrorBoundary>
			<GridEl>
				{game.grid.map((col: Cell[], i: number) => (
					<RowEl key={`Col-${i}`}>
						{col.map((cell: Cell) => (
							<CellComp key={cell.id} cell={cell} />
						))}
					</RowEl>
				))}
			</GridEl>
		</GlobalErrorBoundary>
	)
}

export default Game
