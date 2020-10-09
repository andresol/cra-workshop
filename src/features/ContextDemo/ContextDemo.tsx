import React, { useState, useMemo } from "react"
import TextInput from "UI/TextInput"
import { AwesomeContext, AwesomeContextData } from "./contextHooks"

interface ContextDemoProps {
	children: React.ReactNode
}

export const ContextDemo = ({children}: ContextDemoProps): JSX.Element => {
	const [message, setMessage] = useState("")
	const memoChildren = useMemo(() => children, [children])

	const contextData: AwesomeContextData = {
		message,
		reset: () => setMessage("")
	}

	return (
		<>
			<div>
				<TextInput id="message" label="Global message" value={message} onChange={setMessage}/>
			</div>
			<AwesomeContext.Provider value={contextData}>
				{memoChildren}
			</AwesomeContext.Provider>
		</>
	)
}