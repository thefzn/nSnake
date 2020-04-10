import Cell from 'abstract/Cell'
import GameData from 'abstract/GameData'
import Snake from 'abstract/Snake'
import { Coord, Dir, Status } from 'abstract/Types'
import { getNextCell } from 'algorythms/cells'

export default class User extends Snake {
	private game: GameData
	private dir: Dir = Dir.TOP
	constructor(id: number, head: Coord, game: GameData) {
		super(id, head, game.grid, Status.USER)

		this.game = game
	}

	protected getNext(): Cell | null {
		return getNextCell(this.head, this.dir, this.game)
	}

	protected fruitEaten(): void {
		this.game.resetFruit()
	}
}
