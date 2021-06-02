import {createReducer, on} from "@ngrx/store";
import {toggleFavorite} from "./favorites.actions";

export let initialState: Array<string> = [];

const _favoritesReducer = createReducer(
  initialState,
  on(toggleFavorite, (state, action: any) => {
    let currentFavorites: string[] = [];
    state.forEach((entry: string) => {
      currentFavorites.push(entry);
    });
    if (state.includes(action.album.id)) {
      const index = currentFavorites.indexOf(action.album.id, 0);
      if (index > -1) {
        currentFavorites.splice(index, 1);
      }
    } else {
      currentFavorites = [...currentFavorites, action.album.id]
    }
    return currentFavorites
  }),
);

export function favoritesReducer(state: any, action: any) {
  return _favoritesReducer(state, action);
}

