import { v4 } from 'uuid'
import { hashSync } from 'bcrypt'

class User {
	constructor(
		public readonly id: string,
		public username: string,
		public usertag: string,
		public name_tag_hash: string,
		public email: string,
		public password: string,
		public realname: string,
		public country: string,
		public verified: boolean,
		public created_at: Date = new Date(),
		public updated_at: Date = new Date(),
	) {
		this.id = id ?? this.generateId()
		this.realname = this.formatUserRealName()
	}

	private generateId(): string {
		return v4()
	}

	private formatUserRealName(): string {
		const realname = this.realname.split(' ')
		const formattedRealname = realname.map((name) => {
			return name.charAt(0).toUpperCase() + name.slice(1)
		})

		return formattedRealname.join(' ')
	}

	public generateNameTagHash(secret: string): void {
		this.name_tag_hash = hashSync(this.username + this.usertag, secret)
	}

	public validatePassword(password: string): void {
		let isPasswordValid = true

		if (password.length < 8) isPasswordValid = false

		if (password.length > 30) isPasswordValid = false

		if (!/[A-Z]/.test(password)) {
			isPasswordValid = false
		}

		if (!/[\W_]/.test(password)) {
			isPasswordValid = false
		}

		if (!isPasswordValid) throw new Error('Invalid password') //TODO - create a bussiness error
	}

	public generatePasswordHash(password: string, secret: string): void {
		this.password = hashSync(password, secret)
	}

	public generateUserTag(): void {
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
		let tag = ''

		for (let i = 0; i < 4; i++) {
			const randomIndex = Math.floor(Math.random() * characters.length)
			tag += characters.charAt(randomIndex)
		}

		this.usertag = tag
	}

	public verifyUser(): void {
		this.verified = true
	}
}