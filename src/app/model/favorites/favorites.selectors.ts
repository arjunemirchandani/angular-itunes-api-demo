import {AppState} from "../app.state";
import {createSelector} from "@ngrx/store";

export const _favorites = (state: AppState) => state;
export const favorites = createSelector(_favorites, state => state.favorites);
