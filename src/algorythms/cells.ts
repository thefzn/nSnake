import { Coord, Dir, Status } from 'abstract/Types'
import GameData from 'abstract/GameData'
import Cell from 'abstract/Cell'
import { getDistance, getRandom } from 'algorythms/math'

export function findEmptyCell(
	grid: Cell[][],
	closestToCenter: boolean = false,
): Cell | null {
	const emptyCells: Cell[] = grid.reduce(
		(cells: Cell[], row: Cell[]) =>
			cells.concat(
				row.filter(
					cell =>
						cell.status === Status.DEAD || cell.status === Status.OFF,
				),
			),
		[],
	)
	if (!emptyCells.length) {
		return null
	} else if (!closestToCenter) {
		return getRandom(emptyCells)
	} else {
		const center: Coord = [grid.length / 2, grid[0].length / 2]
		const sortedEmpty: Cell[] = emptyCells.sort((a: Cell, b: Cell) => {
			const dA: number = getDistance(center, a.coord)
			const dB: number = getDistance(center, b.coord)
			return dA < dB ? -1 : dA > dB ? 1 : getRandom([1, -1])
		})
		return sortedEmpty[0]
	}
}

export function getNextCell(
	current: Coord,
	dir: Dir,
	game: GameData,
): Cell | null {
	const [xL, yL]: Coord = game.gridSize.map(c => c - 1) as Coord
	const walls: boolean = game.wallsEnabled
	let next: Coord
	let nextCell: Cell | false
	switch (dir) {
		case Dir.TOP:
			next = [current[0], !walls && current[1] < 1 ? yL : current[1] - 1]
			break
		case Dir.RIGHT:
			next = [!walls && current[0] >= xL ? 0 : current[0] + 1, current[1]]
			break
		case Dir.BOTTOM:
			next = [current[0], !walls && current[1] >= yL ? 0 : current[1] + 1]
			break
		case Dir.LEFT:
		default:
			next = [!walls && current[0] < 1 ? xL : current[0] - 1, current[1]]
	}
	nextCell = !game.grid[next[0]] ? false : game.grid[next[0]][next[1]] || false
	return nextCell || null
}

export function cellIsAlive(cell: Cell | null) {
	return (
		cell &&
		(cell.status === Status.OFF ||
			cell.status === Status.DEAD ||
			cell.status === Status.FRUIT)
	)
}
