import React, { useState } from "react"
import TextInput from "UI/TextInput"
import RangeInput from "UI/RangeInput"
import { UseEffect } from "./UseEffect"

export const UseEffectContainer = (): JSX.Element => {
	const [message, setMessage] = useState("")
	const [count, setCount] = useState(3)
	return (
		<>
			<TextInput id="test" label="Message" value={message} onChange={setMessage}/>
			<RangeInput id="range" label="Count" value={count} onChange={setCount} min={1} max={10}/>
			<UseEffect message={message} count={count}/>
		</>
	)
}