import { BrowserRouter } from "react-router-dom"
import BarLoader from "."
import { renderWithStore } from "../../../../../../tests/helpers/render"

describe("BarLoader Component testing", () => {
    test("Render Test - component renders properly", () => {
        renderWithStore(
            <BrowserRouter>
                <BarLoader />
            </BrowserRouter>
        )
    })
})