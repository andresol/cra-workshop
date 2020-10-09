import React from "react"
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom"
import { ListPosts } from "./ListPosts"

export const ListPostsRouter = (): JSX.Element => {
	const { path, url } = useRouteMatch()

	return (
		<Switch>
			<Route path={`${path}/asc`}>
				<ListPosts sortDirection="asc"/>
			</Route>
			<Route path={`${path}/desc`}>
				<ListPosts sortDirection="desc"/>
			</Route>
			<Route path={path}>
				<Redirect to={`${url}/asc`}/>
			</Route>
		</Switch>
	)
}