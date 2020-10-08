import React, { useState } from "react"
import TextInput from "UI/TextInput"
import RangeInput from "UI/RangeInput"
import Ticker from "features/Ticker"

export const ConnectedTicker = (): JSX.Element => {
	const [message, setMessage] = useState("This is a message")
	const [size, setSize] = useState(5)

	return (
		<>
			<TextInput id="message" value={message} onChange={setMessage} label="Message" />
			<RangeInput id="size" value={size} onChange={setSize} label="Size" min={1} max={50}/>
			<Ticker message={message} size={size}/>
		</>
	)
}