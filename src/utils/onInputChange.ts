import React from "react"

export const onInputChange = (
	onChange: (newValue: string) => void
) => (evt: React.ChangeEvent<HTMLInputElement>) => {
	onChange(evt.target.value)
}

export const onNumericInputChange = (
	onChange: (newValue: number) => void
) => (evt: React.ChangeEvent<HTMLInputElement>) => {
	onChange(evt.target.valueAsNumber)
}

// function onInputChange(onChange: (newValue: string) => void) {
// 	return function(evt: React.ChangeEvent<HTMLInputElement>) {
// 		onChange(evt.target.value)
// 	}
// }