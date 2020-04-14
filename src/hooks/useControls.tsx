import GameData from 'abstract/GameData'
import { Controller } from 'abstract/Types'

export default function useGame(game: GameData): Controller {
	return game.getControls()
}
