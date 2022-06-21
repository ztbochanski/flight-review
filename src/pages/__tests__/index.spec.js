import React from "react"
import { render } from "@testing-library/react"

// You have to write data-testid
const Title = () => <h1 data-testid="hero-title">Fake Title</h1>

test("Displays the correct title", () => {
  const { getByTestId } = render(<Title />)
  // Assertion
  expect(getByTestId("hero-title")).toHaveTextContent("Fake Title")
  // --> Test will pass
})
