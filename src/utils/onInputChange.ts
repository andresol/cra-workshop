import React from "react"

export const onInputChange = (
	onChange: (newValue: string) => void
) => (evt: React.ChangeEvent<HTMLInputElement>) => {
	onChange(evt.target.value)
}

// function onInputChange(onChange: (newValue: string) => void) {
// 	return function(evt: React.ChangeEvent<HTMLInputElement>) {
// 		onChange(evt.target.value)
// 	}
// }