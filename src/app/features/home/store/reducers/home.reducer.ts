import { createReducer } from "@ngrx/store";

export const homeStateKey = 'home';

export interface HomeState {
  data: any;
}

export const initialState: HomeState = {
  data: null
};

export const homeReducer = createReducer(
  initialState,
);
