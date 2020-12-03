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

interface HelloWorldProps {
	newHeading: string
}

export const HelloWorld = (props: HelloWorldProps) => {
	let text = "Hello world"
	const [heading, setHeading] = useState("Hello world")

	const onBtnClick = () => {
		setHeading(props.newHeading)
		text = "Goodbye world"
	}

	return (
		<>
			<h1>{heading}</h1>
			<button onClick={onBtnClick}>Click me</button>
		</>
	)
}

export default HelloWorld