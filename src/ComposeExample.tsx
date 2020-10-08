import React from "react"

interface ComposeExampleProps {
	header: React.ReactNode
	children: React.ReactNode
}

export const ComposeExample = ({header, children}: ComposeExampleProps): JSX.Element => {
	return (
		<div>
			<header>{header}</header>
			<section>
				{children}
			</section>
		</div>
	)
}