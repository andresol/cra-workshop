import { createContext, useContext } from "react"

export const AwesomeContext = createContext<string>(undefined as any)

export const useMessageContext = () => {
	const data = useContext(AwesomeContext)
	if (data === undefined) throw new Error(`Did you forget to provide the message context?`)
	return data
}