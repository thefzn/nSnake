import Cell from 'abstract/Cell'
import Control from 'abstract/Control'
import Fruit from 'abstract/Fruit'
import NPC from 'abstract/NPC'
import User from 'abstract/User'
import { Coord, Speed } from 'abstract/Types'
import { Dispatch } from 'react'
import { findEmptyCell } from 'algorythms/cells'
import { Status } from 'abstract/Types'

export default class GameData {
	// STATE
	public running: boolean = true
	public speed: Speed = Speed.Normal
	public score: number = 0
	public grid: Cell[][] = []

	// Configuration
	public gridSize: Coord = [20, 20]
	public center: Coord
	// public controls: Controls = true
	public showScore: boolean = true
	public wallsEnabled: boolean = false

	// Store
	public npcs: NPC[] = []
	public user: User
	public fruit: Fruit = new Fruit()
	private refresh: Dispatch<number>
	private control: Control

	constructor(gridSize?: Coord, refresh?: Dispatch<number>) {
		this.gridSize = gridSize ? gridSize : this.gridSize
		this.refresh = refresh ? refresh : () => {}
		this.center = this.gridSize.map(v => Math.round(v / 2)) as Coord

		for (let col = 0; col < this.gridSize[0]; col++) {
			const rowArr: Cell[] = []
			for (let row = 0; row < this.gridSize[1]; row++) {
				rowArr.push(new Cell([col, row], Status.OFF, this.wallsEnabled))
			}
			this.grid.push(rowArr)
		}

		this.user = new User(-1, this.center, this)
		this.control = new Control(this.user)

		// eslint-disable-next-line no-console
		console.log(this.control)
		this.resetFruit()

		this.frame()
	}

	public addSnake(start?: Coord, hard: boolean = false): GameData {
		const id: number = this.npcs.length + 1
		const startingPoint: Coord | null =
			start || findEmptyCell(this.grid)?.coord || null

		if (this.npcs.length >= 9 || !startingPoint) return this

		this.npcs.push(new NPC(id, startingPoint, this, hard))

		return this
	}

	public resetFruit(): GameData {
		const empty: Cell | null = findEmptyCell(this.grid) || null
		if (empty) this.fruit.reset(empty)

		return this
	}

	public pause(): GameData {
		this.running = !this.running

		return this
	}

	private frame(): GameData {
		if (!this.running) return this

		for (let npc of this.npcs) {
			npc.frame()
		}
		this.user.frame()

		const t: number = window.setTimeout(() => {
			this.refresh(t)
			this.frame()
		}, this.speed)

		return this
	}
}
