import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";

export const _albumsList = (state: AppState) => state;
export const albumsList = createSelector(_albumsList, (state) => state);
