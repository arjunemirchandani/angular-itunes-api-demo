import {createReducer, on} from '@ngrx/store';
import {updateList} from "./albums.actions";
import {AlbumVO} from "../../control/vos/album/album-vo";

export let albumsList: AlbumVO[] = [];

const _albumsReducer = createReducer(
  albumsList,
  on(updateList, (state, modal: any) => modal.list)
);

export function albumsReducer(state: any, action: any) {
  return _albumsReducer(state, action);
}
