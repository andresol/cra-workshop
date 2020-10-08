import React from "react"
import { onInputChange } from "utils/onInputChange"
import cls from "./TextInput.module.css"

interface TextInputProps {
	id: string
	label: string

	value: string
	onChange: (newValue: string) => void
}

export const TextInput = ({id, label, value, onChange}: TextInputProps): JSX.Element => {
	return (
		<div className={cls.container}>
			<label htmlFor={id} className={cls.label}>{label}</label>
			<input
				id={id}
				className={cls.input}
				type="text"
				value={value}
				onChange={onInputChange(onChange)}/>
		</div>
	)
}