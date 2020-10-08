import React from "react"

export interface RepeatProps {
	count: number
	children: JSX.Element
}

export const Repeat = ({count, children}: RepeatProps): JSX.Element => {
	const newChildren = (new Array(count)).fill(0).map((item, idx) => (
		React.cloneElement(children, { "data-index": idx, key: idx })
	))

	// const newChildren: JSX.Element[] = []
	// for (let i=0; i<count; i++) {
	// 	newChildren.push(React.cloneElement(children, { "data-index": i }))
	// }

	return (
		<>
			{newChildren}
		</>
	)
}