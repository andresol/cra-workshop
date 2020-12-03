import { useState } from "react"

const LIMIT = 10

export const Incrementor = () => {
	const [counter, setCounter] = useState(0)

	const increment = () => {
		setCounter(counter + 1)
	}

	return (
		<>
			<button onClick={increment} disabled={counter >= LIMIT}>{counter}</button>
			{counter >= LIMIT-2 && (<p>You are almost at the limit</p>)}
		</>
	)
}

export default Incrementor