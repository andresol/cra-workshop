import React, { useEffect } from "react"

interface UseEffectProps {
	message: string
	count: number
}

export const UseEffect = ({message, count}: UseEffectProps): JSX.Element => {
	useEffect(() => {
		document.title = `foobar - ${count}`
		return () => {
			document.title = "byebye"
		}
	}, [count])

	useEffect(() => {
		console.log("message", message)
	}, [message])

	return (
		<p>
			{message} - {count}
		</p>
	)
}