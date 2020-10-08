import React from "react"
import { onNumericInputChange } from "utils/onInputChange"
import cls from "./RangeInput.module.css"

interface RangeInputProps {
	id: string
	label: string

	min: number
	max: number

	value: number
	onChange: (newValue: number) => void
}

export const RangeInput = ({
	id,
	label,

	min,
	max,

	value,
	onChange
}: RangeInputProps): JSX.Element => {
	return (
		<div className={cls.container}>
			<label htmlFor={id} className={cls.label}>{label}</label>
			<input
				id={id}
				className={cls.input}
				min={min}
				max={max}
				type="range"
				value={value}
				onChange={onNumericInputChange(onChange)}/>
		</div>
	)
}