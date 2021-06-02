import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";

export const _appMenuItems = (state: AppState) => state;
export const appMenuItems = createSelector(_appMenuItems, (state) => state.appMenu);
