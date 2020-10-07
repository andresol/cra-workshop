import React, { useState } from "react"
import cls from "./Ticker.module.css"

interface TickerProps {
	message: string
	size?: number
}

export const Ticker = ({message, size = 5}: TickerProps): JSX.Element => {
	const [position, setPosition] = useState(0)
	const paddedMessage = "".padStart(size) + message + "".padStart(size)

	const scroll = () => {
		setPosition(
			(position + 1) % (paddedMessage.length - size)
		)
	}

	setTimeout(scroll, 333)

	return (
		<div className={cls.ticker}>
			<pre>
				<code>{paddedMessage.substr(position, size)}</code>
			</pre>
			<button onClick={scroll}>Scroll</button>
		</div>
	)
}