import GameData from 'game/GameData'
import { Controller } from 'game/Types'

export default function useGame(game: GameData): Controller {
	return game.getControls()
}
