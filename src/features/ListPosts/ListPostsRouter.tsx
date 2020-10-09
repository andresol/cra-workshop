import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { ListPosts } from "./ListPosts"

export const ListPostsRouter = (): JSX.Element => {
	return (
		<Switch>
			<Route path="/posts/asc">
				<ListPosts sortDirection="asc"/>
			</Route>
			<Route path="/posts/desc">
				<ListPosts sortDirection="desc"/>
			</Route>
			<Route path="/posts">
				<Redirect to="/posts/asc"/>
			</Route>
		</Switch>
	)
}