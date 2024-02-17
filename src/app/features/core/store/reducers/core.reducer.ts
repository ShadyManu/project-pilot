import { createReducer } from "@ngrx/store";

export const coreStateKey = 'core';

export interface CoreState {
  loading: boolean;
  error: string | null;
}

export const initialState: CoreState = {
  loading: false,
  error: null,
};

export const coreReducer = createReducer(
  initialState,
);
