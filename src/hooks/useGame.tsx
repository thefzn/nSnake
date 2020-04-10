import React, { useState, Dispatch } from 'react'
import GameData from 'abstract/GameData'
import Cell from 'abstract/Cell'
import { Coord } from 'abstract/Types'
import CellComp from 'components/Cell'
import { GridEl, RowEl } from 'atoms'

let theGame: GameData

export default function useGame(size: Coord = [20, 20]): JSX.Element {
	const [, refresh]: [number, Dispatch<number>] = useState(0)
	if (!theGame) {
		theGame = new GameData(size, refresh)
		theGame.addSnake()
	}

	return (
		<GridEl>
			{theGame.grid.map((col: Cell[], i: number) => (
				<RowEl key={`Col-${i}`}>
					{col.map((cell: Cell) => (
						<CellComp key={cell.id} cell={cell} />
					))}
				</RowEl>
			))}
		</GridEl>
	)
}
