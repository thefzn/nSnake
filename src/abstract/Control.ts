import User from 'abstract/User'

export default class Control {
	constructor(private user: User) {
		window.addEventListener('keydown', (e: KeyboardEvent) =>
			this.keyPressed(e.key),
		)
	}

	public keyPressed(e: string) {
		switch (e) {
			case 'ArrowUp':
				this.user.up()
				break
			case 'ArrowDown':
				this.user.down()
				break
			case 'ArrowLeft':
				this.user.left()
				break
			case 'ArrowRight':
				this.user.right()
				break
		}
	}
}
