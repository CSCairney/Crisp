import type { AnyAction, ThunkAction } from "@reduxjs/toolkit";

import type { RootState } from "~/store";

export type ActionWithThunk<T = void> = ThunkAction<
  T,
  RootState,
  unknown,
  AnyAction
>;

export type AsyncData<T> = {
  isLoading: boolean;
  error: unknown | null;
  data: T | null;
};