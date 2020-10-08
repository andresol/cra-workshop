import React, { useState } from "react"
import RangeInput from "UI/RangeInput"
import { Repeat, RepeatProps } from "./Repeat"

interface RepeatContainerProps extends Pick<RepeatProps, "children"> {}

export const RepeatContainer = ({children}: RepeatContainerProps): JSX.Element => {
	const [count, setCount] = useState(1)

	return (
		<>
			<RangeInput value={count} id="count" onChange={setCount} min={1} max={50} label="Clone count"/>
			<div>
				<Repeat count={count}>
					{children}
				</Repeat>
			</div>
		</>
	)
}