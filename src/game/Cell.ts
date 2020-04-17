import { Status, Coord } from 'game/Types'
import CellClasses from 'game/CellClasses.json'

export default class Cell {
	public id: string

	constructor(
		public coord: Coord = [0, 0],
		public status: Status = Status.OFF,
		public isWall: boolean = false,
	) {
		this.id = `cell-${this.coord.join('-')}`
	}

	get classes(): string {
		return CellClasses[this.status] || CellClasses[0]
	}
}
