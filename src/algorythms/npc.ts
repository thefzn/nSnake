import GameData from 'abstract/GameData'
import Cell from 'abstract/Cell'
import { Dir, Coord, OpositeDir } from 'abstract/Types'
import { getDelta, getClosestTo } from 'algorythms/math'
import { getNextCell, cellIsAlive } from 'algorythms/cells'

function npc(game: GameData, pos: Coord, hard: boolean): Cell | null {
	const target: Coord = hard
		? getClosestTo(pos, game.fruit.coord, game.user.head)
		: game.fruit.coord
	const [xC, yC]: Coord = game.center
	const [xD, yD]: Coord = getDelta(target, pos)
	const [xDA, yDA]: Coord = [Math.abs(xD), Math.abs(yD)]
	let newDir: Dir
	let count: number = 0
	let next: Cell | null = null

	if (xD && (xDA < yDA || !yD)) {
		newDir = xD < 0 ? Dir.LEFT : Dir.RIGHT
		newDir = !game.wallsEnabled && xDA > xC ? OpositeDir[newDir] : newDir
	} else {
		newDir = yD < 0 ? Dir.TOP : Dir.BOTTOM
		newDir = !game.wallsEnabled && yDA > yC ? OpositeDir[newDir] : newDir
	}

	next = getNextCell(pos, newDir, game)
	while (count < 4 && (!next || !cellIsAlive(next))) {
		count++
		newDir = newDir === 3 ? Dir.TOP : newDir + 1
		next = getNextCell(pos, newDir, game)
	}

	return next
}

export default npc
