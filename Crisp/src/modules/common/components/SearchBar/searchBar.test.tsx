import { describe, test } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchBar from ".";
import { renderWithStore } from "../../../../../tests/helpers/render";
import { MapContainer } from "react-leaflet";

describe("SearchBar Component", () => {
  test("should render", () => {
    // Arrange
    renderWithStore(
      <BrowserRouter>
        <SearchBar />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
  });
  test("Input field can be changed and then deleted", () => {
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
  
    const clearButton = screen.getByRole('button', {
      name: /x/i,
    });
  
    fireEvent.click(clearButton);

    expect(inputField.value).toBe('');
  })
});
