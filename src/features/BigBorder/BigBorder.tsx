import React from "react"

interface BigBorderProps {
	children: React.ReactNode
}

const theme = {
	borderWidth: 5
}
const borderStyle = {
	border: theme.borderWidth+"px solid #f00"
}

export const BigBorder = ({children, ...rest}: BigBorderProps): JSX.Element => (
	// rest["data-index"] = #
	<div style={borderStyle} {...rest}>
		{children}
	</div>
)