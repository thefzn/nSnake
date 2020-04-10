import Cell from 'abstract/Cell'
import { Status, Coord } from 'abstract/Types'

export default class Fruit {
	private cell?: Cell

	reset(cell: Cell): void {
		if (this.cell?.status === Status.FRUIT) {
			this.cell.status = Status.OFF
		}
		this.cell = cell
		this.cell.status = Status.FRUIT
	}

	get coord(): Coord {
		return this.cell?.coord || [0, 0]
	}
}
