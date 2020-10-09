import { createContext, useContext } from "react"

export interface UserContextData {
	name: string
	email: string
}

export const UserContext = createContext<UserContextData>(undefined as any)

export const useUserContext = () => {
	const userData = useContext(UserContext)
	if (userData === undefined) throw new Error("Ooops, no context for UserData")
	return userData
}