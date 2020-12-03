import React from "react"
import messages from "./messages"

export const ListMessagesNoJSX = () => (
	React.createElement("ul", {},

		Object.entries(messages).map(([id, message]) => (

			React.createElement("li", { key: id, "data-id": id }, message)

		))

	)
)

export default ListMessagesNoJSX