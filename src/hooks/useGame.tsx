import { useState, Dispatch } from 'react'
import GameData from 'abstract/GameData'
import { Coord } from 'abstract/Types'

let theGame: GameData

export default function useGame(size: Coord = [20, 20]): GameData {
	const [, refresh]: [number, Dispatch<number>] = useState(0)
	if (!theGame) {
		theGame = new GameData(size, refresh)
		// theGame.addSnake()
	}

	return theGame
}
