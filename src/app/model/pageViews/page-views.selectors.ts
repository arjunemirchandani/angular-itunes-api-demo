import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";

export const _pageViewsTotal = (state: AppState) => state;
export const pageViewsTotal = createSelector(_pageViewsTotal, (state) => state);
