import React from "react"
import { useRouteMatch } from "react-router-dom"
import Ticker from "features/Ticker"

export const RouteTickerMessage = (): JSX.Element => {
	const { params : { message } } = useRouteMatch<{message: string}>()
	return (
		<Ticker message={message}/>
	)
}