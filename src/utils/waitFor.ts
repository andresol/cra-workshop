export const waitFor = (milliseconds: number) =>
	new Promise((res) => setTimeout(res, milliseconds))