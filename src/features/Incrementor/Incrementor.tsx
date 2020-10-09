import React, { useState, memo } from "react"
import { useUserContext } from "features/UserData"

interface IncrementorProps {
	limit: number
}

export const Incrementor = ({limit}: IncrementorProps): JSX.Element => {
	const [counter, setCounter] = useState(0)
	const { email } = useUserContext()
	
	const increment = () => {
		setCounter(counter + 1)
	}
	return (
		<>
			<button onClick={increment} disabled={counter >= limit}>
				{counter} - {email}
			</button>
			{<p>{(counter >= limit - 2) && "You are almost at the limit"}</p>}
		</>
	)
}

export default memo(Incrementor)