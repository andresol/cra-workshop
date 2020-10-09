import React, { useEffect, useState } from "react"
import { fetchPosts, Post } from "api/jsonplaceholderApi"

export const ListPosts = (): JSX.Element => {
	const [posts, setPosts] = useState<Post[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<Error | undefined>(undefined)

	useEffect(() => {
		const dataFetch = async () => {
			setIsLoading(true)
			setError(undefined)
			try {
				const data = await fetchPosts()
				setPosts(data)
			} catch (error) {
				setError(error)
			} finally {
				setIsLoading(false)
			}
		}
		dataFetch()
	}, [])

	if (error) {
		return <p>Oops</p>
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