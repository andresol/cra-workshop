import React from "react"
import { UserContext, UserContextData } from "./userContext"

interface UserContextProviderProps {
	children: React.ReactNode
}

const userData: UserContextData = {
	name: "Ola Normann",
	email: "ola@norge.no"
}

export const UserContextProvider = ({children}: UserContextProviderProps): JSX.Element => {
	return (
		<UserContext.Provider value={userData}>
			{children}
		</UserContext.Provider>
	)
}