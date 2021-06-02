import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";

export const _pageViews = (state: AppState) => state;
export const pageViews = createSelector(_pageViews, state => state.pageViews);
