import { Coord, Status } from 'abstract/Types'
import { cellIsAlive } from 'algorythms/cells'
import Cell from 'abstract/Cell'

export default abstract class Snake {
	public alive: boolean = true
	public length: number = 3
	public score: number = 0
	protected cells: Cell[] = []

	constructor(
		public id: number,
		head: Coord,
		protected grid: Cell[][],
		public cellStatus: Status = Status.NPC1,
	) {
		this.cells.push(this.grid[head[0]][head[1]])
	}

	public frame(): this {
		if (!this.alive) return this

		const nextCell: Cell | null = this.getNext()

		if (nextCell && cellIsAlive(nextCell)) {
			if (nextCell.status === Status.FRUIT) {
				this.fruitEaten()
				this.length++
			}

			nextCell.status = this.cellStatus
			this.cells.splice(0, 0, nextCell)

			if (this.cells.length > this.length) {
				const toDrop: Cell = this.cells[this.cells.length - 1]
				toDrop.status = Status.OFF
				this.cells.pop()
			}
		} else {
			this.die()
		}

		return this
	}

	public remove(): void {
		this.cells.forEach((cell: Cell) => (cell.status = Status.OFF))
		this.alive = false
	}

	public get head(): Coord | null {
		return this.cells[0]?.coord
	}

	public get tail(): Coord {
		return this.cells[this.cells.length - 1].coord
	}

	protected abstract getNext(): Cell | null
	protected abstract fruitEaten(): void

	protected die() {
		this.alive = false
		this.cells.forEach(cell => (cell.status = Status.DEAD))
		this.cells = []
	}
}
