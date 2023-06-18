import { User } from 'entities/user'

export type RegistrationFormValues = {
	name: string
	surname: string
	email: string
	password: string
	confirmPassword?: string
}

export type LoginFormValues = {
	email: string
	password: string
}

export interface AuthResponse {
	accessToken: string
	refreshToken: string
	user: User
}
