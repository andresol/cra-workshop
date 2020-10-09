import React, { useMemo } from "react"
import { fetchPostsAxios, Post } from "api/jsonplaceholderApi"
import { useAsync } from "hooks/useAsync"
import { useMessageContext } from "features/ContextDemo"

const compare = new Intl.Collator(navigator.language).compare

interface ListPostsProps {
	sortDirection?: "asc" | "desc"
}

const postSorter = (
	posts: Post[],
	direction: ListPostsProps["sortDirection"] = "asc"
) => {
	const mutatedPosts = posts.slice()
	return direction === "asc"
		? mutatedPosts.sort((a, b) => compare(a.title, b.title))
		: mutatedPosts.sort((a, b) => compare(b.title, a.title))
}

export const ListPosts = ({sortDirection}: ListPostsProps): JSX.Element => {
	const { value, status, error } = useAsync(fetchPostsAxios)
	const posts = useMemo(() =>
		postSorter(value ?? [], sortDirection), [value, sortDirection])

	const message = useMessageContext()

	if (error) {
		return <p>Oops {error.message}</p>
	}
	if (status !== "success") {
		return <p>One sec...</p>
	}

	return (
		<>
			<h1>{message}</h1>
			<ul>
				{posts.map(({id, title}) => (
					<li key={id}>{title}</li>
				))}
			</ul>
		</>
	)
}