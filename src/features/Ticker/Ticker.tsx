import { useState } from "react"
import cls from "./Ticker.module.css"

interface TickerProps {
	message: string
	size: number
}

export const Ticker = ({message, size}: TickerProps) => {
	// const {message, size} = props
	// const message = props.message
	// const size = props.size

	const paddedMessage = "".padStart(size) + message + "".padStart(size)
	const [position, setPosition] = useState(0)

	const scrollText = () => {
		setPosition(
			(position + 1) % (paddedMessage.length - size)
 		)
	}

	setTimeout(scrollText, 333)

	return (
		<>
			<pre className={cls.ticker}>
				<code>{paddedMessage.substr(position, size)}</code>
			</pre>
			<button onClick={scrollText}>Scroll</button>
		</>
	)
}

export default Ticker