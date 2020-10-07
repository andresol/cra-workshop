import React from "react"
import cls from "./HelloWorldButton.module.css"

export const HelloWorldButton = (): JSX.Element => {
	const onClick = () => {
		alert("Hello world")
	}
	return <button className={cls.button} onClick={onClick}>Click me</button>
}