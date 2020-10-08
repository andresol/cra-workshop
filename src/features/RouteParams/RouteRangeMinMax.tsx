import React, { useState } from "react"
import { useRouteMatch } from "react-router-dom"
import RangeInput from "UI/RangeInput"

export const RouteRangeMinMax = (): JSX.Element => {
	const { params: { min, max } } = useRouteMatch<{min: string, max: string}>()
	const [range, setRange] = useState(parseInt(min))

	return (
		<>
			<pre><code>{`${min} <= ${range} >= ${max}`}</code></pre>
			<RangeInput
			id="router-range"
			label="Router range"
			min={parseInt(min)}
			max={parseInt(max)}
			value={range}
			onChange={setRange}/>
		</>
	)
}