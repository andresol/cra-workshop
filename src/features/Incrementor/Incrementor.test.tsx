import React from "react"
import { render } from "@testing-library/react"
import { Incrementor } from "./Incrementor"

describe("Incrementor", () => {
	it("should be a function", () => {
		expect(typeof Incrementor).toBe("function")
	})
	it("renders a button", () => {
		const { getByRole } = render(<Incrementor limit={10}/>)
		const button = getByRole("button")
		expect(button).toBeInTheDocument()
	})
})