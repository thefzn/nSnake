import Cell from 'abstract/Cell'
import GameData from 'abstract/GameData'
import Snake from 'abstract/Snake'
import { Coord, Dir, Status, OpositeDir } from 'abstract/Types'
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

	public up() {
		if (Dir.TOP !== OpositeDir[this.dir]) this.dir = Dir.TOP
	}

	public down() {
		if (Dir.BOTTOM !== OpositeDir[this.dir]) this.dir = Dir.BOTTOM
	}

	public left() {
		if (Dir.LEFT !== OpositeDir[this.dir]) this.dir = Dir.LEFT
	}

	public right() {
		if (Dir.RIGHT !== OpositeDir[this.dir]) this.dir = Dir.RIGHT
	}
}
