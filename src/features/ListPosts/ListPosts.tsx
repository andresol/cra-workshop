import React, { useEffect, useState, useCallback } from "react"
import { fetchPostsAxios, Post } from "api/jsonplaceholderApi"

export const ListPosts = (): JSX.Element => {
	const [posts, setPosts] = useState<Post[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<Error | undefined>(undefined)

	const dataFetch = useCallback(async () => {
		setIsLoading(true)
		setError(undefined)
		try {
			const data = await fetchPostsAxios()
			setPosts(data)
		} catch (error) {
			setError(error)
		} finally {
			setIsLoading(false)
		}
	}, [])

	useEffect(() => {
		dataFetch()
	}, [dataFetch])

	if (error) {
		return <p>Oops {error.message}</p>
	}
	if (isLoading) {
		return <p>One sec...</p>
	}

	return (
		<ul>
			{posts.map(({id, title}) => (
				<li key={id}>{title}</li>
			))}
		</ul>
	)
}