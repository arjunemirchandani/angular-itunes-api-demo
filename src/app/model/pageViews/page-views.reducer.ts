import {createReducer, on} from '@ngrx/store';
import {incrementPageView} from "./page-views.actions";

export const initialState: number = 0;

const _pageViewsReducer = createReducer(
  initialState,
  on(incrementPageView, state => state + 1)
);

export function pageViewsReducer(state: any, action: any) {
  return _pageViewsReducer(state, action);
}
