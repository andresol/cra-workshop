import messages from "./messages"

export const ListMessages = () => (
	<ul>
		{Object.entries(messages).map(([id, message]) => (
			<li key={id} data-id={id}>{message}</li>
		))}
	</ul>
)



export default ListMessages