import React from "react"

// interface HelloWorldProps extends Record<string, any> {
// 	text: string
// 	prefix?: string
// }

interface HelloWorldProps {
	children: React.ReactChild
	prefix?: string
}

// type Callback = (funcToCall: () => void) => Promise<any>

// const myCallbackFunc: Callback = async (foo) => {}

// export const HelloWorld = (props: HelloWorldProps): JSX.Element => {
// 	return (<h1>{props.prefix ?? "Prefix:"}{props.text}</h1>)
// }

// export const HelloWorld = (props: HelloWorldProps): JSX.Element => {
// 	// const text = props.text
// 	// const prefix = props.prefix ?? "Prefix:"
// 	const { text, prefix = "Prefix:" } = props
// 	return (<h1>{prefix}{text}</h1>)
// }

export const HelloWorld = ({
	children,
	prefix = "Prefix:"
}: HelloWorldProps): JSX.Element => (
	<h1>
		{prefix}{children}
	</h1>
)

// const arrowFunc = (a: number, b: number) => { return a + b }
// const arrowFuncExpression = (a: number, b: number) => a + b


// export class HelloWorld extends React.PureComponent {
// 	public render() {
// 		console.log("Hello from hello world")
// 		return (<h1>Hello World</h1>)
// 	}
// }