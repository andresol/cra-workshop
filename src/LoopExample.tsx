const DATA = {
	"id-1": "hello",
	"id-2": "world",
	"id-3": "!",
	"id-4": 42
}

export const LoopExample = () => {
	const dataArray = Object.entries(DATA)
	return (
		<ul>
			{dataArray.map(
				([id, value]) => <li key={id}>{value}</li>
			)}
		</ul>
	)
}

export default LoopExample