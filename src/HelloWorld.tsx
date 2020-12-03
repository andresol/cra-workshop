// function onButtonClick() {
// 	console.log("Hello world")
// 	alert("Hello world\nFrom react")
// }

import { useState } from "react"

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
	let text = "Hello world"
	const state = useState("Hello world")

	const onBtnClick = () => {
		state[1]("Goodbye world")
		text = "Goodbye world"
	}

	return (
		<>
			<h1>{state[0]}</h1>
			<button onClick={onBtnClick}>Click me</button>
		</>
	)
}

export default HelloWorld