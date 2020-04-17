import { Coord } from 'game/Types'

export function getDelta([x1, y1]: Coord, [x2, y2]: Coord): Coord {
	return [x1 - x2, y1 - y2]
}

export function getDistance(coord1: Coord, coord2: Coord): number {
	const delta: Coord = getDelta(coord1, coord2)
	return delta[0] ** 2 + delta[1] ** 2
}

export function getClosestTo(ref: Coord, ...rest: Coord[]): Coord {
	let winner: Coord = rest[0]
	let distance: number = getDistance(ref, rest[0])

	if (rest.length <= 1) return winner

	rest.forEach((coord: Coord) => {
		const d = getDistance(ref, coord)
		if (d < distance) {
			winner = coord
			distance = d
		}
	})

	return winner
}

export function getRandom<T>(list: T[]): T {
	const random = Math.round(Math.random() * list.length)

	return list[random]
}
