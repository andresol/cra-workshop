// function onButtonClick() {
// 	console.log("Hello world")
// 	alert("Hello world\nFrom react")
// }

const onButtonClick = () => {
	console.log("Hello world")
	alert("Hello world\nFrom react")
}

// export function HelloWorld() {
// 	return (
// 		<>
// 			<h1>Hello world from hello world</h1>
// 			<button onClick={onButtonClick}>Click me</button>
// 		</>
// 	)
// }

export const HelloWorld = () => {
	return (
		<>
			<h1>Hello world from hello world</h1>
			<button onClick={onButtonClick}>Click me</button>
		</>
	)
}

export default HelloWorld