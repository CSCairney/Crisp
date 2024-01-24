import { BrowserRouter } from "react-router-dom"
import { renderWithStore } from "../../../../../../tests/helpers/render"
import CircularLoader from "."

describe("CircularLoader Component testing", () => {
    test("Render Test - component renders properly", () => {
        renderWithStore(
            <BrowserRouter>
                <CircularLoader />
            </BrowserRouter>
        )
    })
})