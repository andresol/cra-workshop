import { createContext, useContext } from "react"

export interface AwesomeContextData {
	message: string
	reset: () => void
}

export const AwesomeContext = createContext<AwesomeContextData>(undefined as any)

export const useMessageContext = () => {
	const data = useContext(AwesomeContext)
	if (data === undefined) throw new Error(`Did you forget to provide the message context?`)
	return data
}