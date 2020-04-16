import Cell from 'abstract/Cell'
import GameData from 'abstract/GameData'
import Snake from 'abstract/Snake'
import { Coord, Dir, Status, OpositeDir } from 'abstract/Types'
import { getNextCell, findEmptyCell } from 'algorythms/cells'

export default class User extends Snake {
	private game: GameData
	private dir: Dir = Dir.TOP
	constructor(id: number, head: Coord, game: GameData) {
		super(id, head, game.grid, Status.USER)

		this.game = game
	}

	protected getNext(): Cell | null {
		return this.head ? getNextCell(this.head, this.dir, this.game) : null
	}

	protected fruitEaten(): void {
		this.game.resetFruit()
	}

	public up(): void {
		if (Dir.TOP !== OpositeDir[this.dir]) this.dir = Dir.TOP
	}

	public down(): void {
		if (Dir.BOTTOM !== OpositeDir[this.dir]) this.dir = Dir.BOTTOM
	}

	public left(): void {
		if (Dir.LEFT !== OpositeDir[this.dir]) this.dir = Dir.LEFT
	}

	public right(): void {
		if (Dir.RIGHT !== OpositeDir[this.dir]) this.dir = Dir.RIGHT
	}

	public reset(head?: Cell | null): void {
		const newHead: Cell =
			head || this.cells[0] || findEmptyCell(this.game.grid, true)
		this.die()
		this.cells = [newHead]
		this.length = 3
		this.alive = true
		this.dir = Dir.TOP
		this.score = 0
	}
}
