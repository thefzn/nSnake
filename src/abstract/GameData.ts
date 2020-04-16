import Cell from 'abstract/Cell'
import Control from 'abstract/Control'
import Fruit from 'abstract/Fruit'
import NPC from 'abstract/NPC'
import User from 'abstract/User'
import { Controller, Coord, Speed, Status } from 'abstract/Types'
import { Dispatch } from 'react'
import { findEmptyCell } from 'algorythms/cells'

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

		if (this.running) this.frame()

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

	public resetUser(): void {
		const newHead: Cell | null = findEmptyCell(this.grid, true)
		this.user.reset(newHead)
	}
	public removeSnake(): void {
		const toRemove: NPC | undefined = this.npcs.pop()
		if (toRemove) toRemove.remove()
	}
	public reset(): void {
		while (this.npcs.length) {
			const toRemove: NPC | undefined = this.npcs.pop()
			if (toRemove) toRemove.remove()
		}
		this.user.reset()
	}

	public getControls(): Controller {
		return {
			up: () => this.user.up(),
			down: () => this.user.down(),
			left: () => this.user.left(),
			right: () => this.user.right(),
			resetUser: () => this.resetUser(),
			resetGame: () => this.reset(),
			addSnake: () => {
				this.addSnake()
			},
			addKiller: () => {
				this.addSnake(undefined, true)
			},
			removeSnake: () => this.removeSnake(),
			pause: () => {
				this.pause()
			},
		}
	}
}
