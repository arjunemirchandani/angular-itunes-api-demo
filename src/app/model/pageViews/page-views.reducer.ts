import {createReducer, on} from '@ngrx/store';
import {incrementPageView} from "./page-views.actions";

export const totalPageViews: number = 0;

const _pageViewsReducer = createReducer(
  totalPageViews,
  on(incrementPageView, (state) => state += 1)
);

export function pageViewsReducer(state: any, action: any) {
  return _pageViewsReducer(state, action);
}
