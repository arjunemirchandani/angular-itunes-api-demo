import {createReducer, on} from '@ngrx/store';
import {updateList} from "./albums.actions";
import {Album} from "./albums.model";

export let initialState: Array<Album> = [];

const _albumsReducer = createReducer(
  initialState,
  on(updateList, (state, action: any) => action.list));

export function albumsReducer(state: any, action: any) {
  return _albumsReducer(state, action);
}
