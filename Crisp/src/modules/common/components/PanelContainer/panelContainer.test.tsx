import { describe } from "vitest";
import { BrowserRouter } from "react-router-dom";
import { act, screen } from "@testing-library/react";
import { renderWithStore } from "../../../../../tests/helpers/render";
import PanelContainer from ".";
import { panelTypes } from "../../constants/menu";
import { setPanelOpenStatus } from "../../store";

describe("PanelContainer Component", () => {
  // Arrange
  test("Should render with Login Redirect", () => {
    const { store } = renderWithStore(
      <BrowserRouter>
        <PanelContainer />
      </BrowserRouter>
    );
    // Act
    act(() => {
    store.dispatch(setPanelOpenStatus(panelTypes.Selection));
    });
    const noDataIndicator = screen.getByText(/no data\?/i);
    const loginRedirect = screen.getByRole('link', {
        name: /login/i
      });
    // Assert
    expect(noDataIndicator).toBeInTheDocument();
    expect(loginRedirect).toBeInTheDocument();
  });
  test("Should render with Filter when it is the active panelType", () => {
    const { store } = renderWithStore(
      <BrowserRouter>
        <PanelContainer />
      </BrowserRouter>
    );
    // Act
    act(() => {
    store.dispatch(setPanelOpenStatus(panelTypes.Filter));
    });
    const filterTitle = screen.getByText(/filter menu/i);
    // Assert
    expect(filterTitle).toBeInTheDocument();
  });
  test("Should render with DataSelection when it is the active panelType", () => {
    const { store } = renderWithStore(
      <BrowserRouter>
        <PanelContainer />
      </BrowserRouter>
    );
    // Act
    act(() => {
    store.dispatch(setPanelOpenStatus(panelTypes.Selection));
    });
    const dataSelectorTitle = screen.getByText(/data selection/i);
    // Assert
    expect(dataSelectorTitle).toBeInTheDocument();
  });
  test("Should render with Saved Views when it is the active panelType", () => {
    const { store } = renderWithStore(
      <BrowserRouter>
        <PanelContainer />
      </BrowserRouter>
    );
    // Act
    act(() => {
    store.dispatch(setPanelOpenStatus(panelTypes.Views));
    });
    const viewsTitle = screen.getByText(/saved views/i);
    // Assert
    expect(viewsTitle).toBeInTheDocument();
  });
  test("Should not render when panelType is none", () => {
    const { store } = renderWithStore(
      <BrowserRouter>
        <PanelContainer />
      </BrowserRouter>
    );
    // Act
    act(() => {
    store.dispatch(setPanelOpenStatus(panelTypes.None));
    });
    const viewsTitle = screen.queryByText(/saved views/i);
    // Assert
    expect(viewsTitle).not.toBeInTheDocument();
  });
});
