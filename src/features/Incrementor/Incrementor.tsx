import React, { useState } from "react"

interface IncrementorProps {
	limit: number
}

export const Incrementor = ({limit}: IncrementorProps): JSX.Element => {
	const [counter, setCounter] = useState(0)
	
	const increment = () => {
		setCounter(counter + 1)
	}
	return (
		<>
			<button onClick={increment} disabled={counter >= limit}>
				{counter}
			</button>
			{<p>{(counter >= limit - 2) && "You are almost at the limit"}</p>}
		</>
	)
}