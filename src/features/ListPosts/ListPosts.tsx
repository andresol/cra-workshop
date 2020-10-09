import React from "react"
import { fetchPostsAxios } from "api/jsonplaceholderApi"
import { useAsync } from "hooks/useAsync"

export const ListPosts = (): JSX.Element => {
	const { value, status, error } = useAsync(fetchPostsAxios)

	if (error) {
		return <p>Oops {error.message}</p>
	}
	if (status !== "success") {
		return <p>One sec...</p>
	}

	return (
		<ul>
			{value?.map(({id, title}) => (
				<li key={id}>{title}</li>
			))}
		</ul>
	)
}