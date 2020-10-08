import React from "react"
import { useRouteMatch } from "react-router-dom"

export const ArticlesRoute = (): JSX.Element => {
	const { params: { articleId } } = useRouteMatch<{articleId: string}>()

	return (
		<>
			<p>No such article {articleId}</p>
		</>
	)
}