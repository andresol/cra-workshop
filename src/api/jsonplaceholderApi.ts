export interface Post {
	userId: number
	id: number
	title: string
	body: string
} 

export const fetchPosts = async (doThrow: boolean = false) => {
	const url = doThrow
		? "http://jsonplaceholder.typicode.com/postsafsurøoiwutoij"
		: "http://jsonplaceholder.typicode.com/posts"
	
	const response = await fetch(url)
	if (response.status !== 200) {
		throw new Error(`Got ${response.status} from server`)
	}

	const data: Post[] = await response.json()
	return data
}