export interface Post {
	userId: number
	id: number
	title: string
	body: string
} 

export const fetchPosts = async () => {
	const response = await fetch("http://jsonplaceholder.typicode.com/posts")
	const data: Post[] = await response.json()
	return data
}