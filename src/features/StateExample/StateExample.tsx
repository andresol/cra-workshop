import React, { useState } from "react"
// const useState = React.useState
// const {useState} = React

export const StateExample = () => {
	const [count, setCount] = useState(0)

	const onClick = () => {
		console.log("clicked")
		setCount(count+1)
	}

	return (<button onClick={onClick}>{count}</button>)
}