import { describe, test } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchBar from ".";
import { renderWithStore } from "../../../../../tests/helpers/render";
import { MapContainer } from "react-leaflet";

describe("SearchBar Component", () => {
  test("Render test - Component renders properly", () => {
    // Arrange
    renderWithStore(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
  });
  test("State management test - input state is populated", () => {
    renderWithStore(
        <MapContainer>
            <BrowserRouter>
                <SearchBar />    
            </BrowserRouter>
        </MapContainer>
    )

    const inputField = screen.getByRole('textbox') as HTMLInputElement;

    fireEvent.change(inputField, { target: { value: 'new value' } });
  
    expect(inputField.value).toBe('new value');
  })
  test("User interface test - Input field can be cleared", () => {
    renderWithStore(
        <MapContainer>
            <BrowserRouter>
                <SearchBar />    
            </BrowserRouter>
        </MapContainer>
    )

    const inputField = screen.getByRole('textbox') as HTMLInputElement;

    fireEvent.change(inputField, { target: { value: 'new value' } });
  
    const clearButton = screen.getByRole('button', {
      name: /x/i,
    });
  
    fireEvent.click(clearButton);

    expect(inputField.value).toBe('');
  })
});
