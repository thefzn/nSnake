import Cell from 'game/Cell'
import { Status, Coord } from 'game/Types'

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
