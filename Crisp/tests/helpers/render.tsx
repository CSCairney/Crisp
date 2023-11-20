import { RenderOptions, render } from "@testing-library/react";
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import type { RootState } from "../../src/store";

import { mockStoreData } from "../mocks";
import { createTestStore } from "./store";
import React from "react";

type RenderWithStoreOptions = RenderOptions & {
  state?: Partial<RootState>;
};

export function renderWithStore(
  component: ReactElement,
  options: RenderWithStoreOptions = {}
) {
  const { state = mockStoreData, ...renderOptions } = options;
  const store = createTestStore(state);

  const renderedComponentWithStore = render(
    <Provider store={store}>{component}</Provider>,
    renderOptions
  );

  return {
    ...renderedComponentWithStore,
    store,
  };
}

type RenderWithRouterAndStoreOptions = RenderOptions & {
  state?: Partial<RootState>;
  route?: string;
};

export function renderWithRouterAndStore(
  component: ReactElement,
  options: RenderWithRouterAndStoreOptions = {}
) {
  const { state = mockStoreData, route = "/", ...renderOptions } = options;
  const store = createTestStore(state);

  const renderedComponentWithRouterAndStore = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
    </Provider>,
    renderOptions
  );

  return {
    ...renderedComponentWithRouterAndStore,
    store,
  };
}
