export type Coord = [number, number]
export enum Speed {
	Lazy = 1000,
	Slow = 500,
	Normal = 250,
	Fast = 125,
	Extreme = 60,
}
export enum Status {
	OFF,
	USER,
	FRUIT,
	DEAD,
	NPC1,
	NPC2,
	NPC3,
	NPC4,
	NPC5,
	NPC6,
	NPC7,
	NPC8,
	NPC9,
}

export enum Dir {
	TOP,
	RIGHT,
	BOTTOM,
	LEFT,
}

export const OpositeDir: number[] = [2, 3, 0, 1]
