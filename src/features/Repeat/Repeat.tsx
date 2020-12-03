import React from "react"

interface RepeatProps {
	count: number
	children: JSX.Element
}

export const Repeat = ({count, children}: RepeatProps) => {
	// const newChildren: JSX.Element[] = []
	// for (let i=0; i<count; i++) {
	// 	newChildren.push(
	// 		React.cloneElement(children, { "data-index": i, key: i })
	// 	)
	// }

	const newChildren = (new Array(count)).fill(0).map((item, idx) => (
		React.cloneElement(children, { "data-index": idx, key: idx })
	))

	return (
		<div data-count={count}>
			{newChildren}
		</div>
	)
}

export default Repeat


// <Repeat count={3}>
// 	<p>Message</p>
// </Repeat>