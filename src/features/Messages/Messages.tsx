import React, { Fragment } from "react"

const message = {
	"message-1": "Hello world",
	"message-2": "Goodbye world",
	"message-3": "I'm back world!"
}

// const test = [
// 	["message-1", "hello world"],
// 	["message-2", "goodbye world"]
// ]

export const Messages = (): JSX.Element => {
	

	return (
		<ul>
			{Object.entries(message).map(([key, value]) => (
				<Fragment key={key}>
					<li data-id={key}>{value}</li>
					<li data-id={key}>{value}</li>
				</Fragment>
			))}
		</ul>
	)
}