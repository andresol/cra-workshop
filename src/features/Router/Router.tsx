import React, { Suspense, lazy } from "react"
import { Route, Switch, Redirect, useLocation } from "react-router-dom"
import { ArticlesRoute } from "./ArticlesRoute"
import { RouteTickerMessage, RouteRangeMinMax } from "features/RouteParams"
import Messages from "features/Messages"
import UseEffect from "features/UseEffect"
import ListPosts from "features/ListPosts"

const loadIncrementor = () => import("features/Incrementor")
const Incrementor = lazy(() => loadIncrementor())

export const Router = (): JSX.Element => {
	const { pathname } = useLocation()

	return (
		<Suspense fallback={<p>One sec...</p>}>
			<Switch>
				<Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />

				<Route path="/use-effect">
					<UseEffect/>
				</Route>

				<Route path="/incrementor">
					<Incrementor limit={10}/>
				</Route>
				<Route path="/ticker/:message">
					<RouteTickerMessage/>
				</Route>
				<Route path="/articles/:articleId">
					<ArticlesRoute/>
				</Route>
				<Route path="/range/:min/:max">
					<RouteRangeMinMax/>
				</Route>

				<Route path="/posts">
					<ListPosts/>
				</Route>

				<Route path="/loop-example">
					<Messages/>
				</Route>

				<Route path="/" exact>
					<h1>Home</h1>
				</Route>

				<Route>
					<h1>404 not found</h1>
				</Route>
			</Switch>
		</Suspense>
	)
}