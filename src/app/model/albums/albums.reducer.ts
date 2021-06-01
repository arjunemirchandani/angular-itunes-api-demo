import {createReducer, on} from '@ngrx/store';
import {updateList} from "./albums.actions";
import {AlbumVO} from "../../control/vos/album/album-vo";

export let albumsList: AlbumVO[] = [];

const _albumsReducer = createReducer(
  albumsList,
  on(updateList, (state, list: any) => {
    let albumsList: any = [];
    console.log("In Item List:", list);
    Object.keys(list).map((personNamedIndex: any) => personNamedIndex != 'type' ? albumsList[personNamedIndex] = list[personNamedIndex] : null);
    console.log("New Item List:", albumsList);
    return albumsList;
  })
);

export function albumsReducer(state: any, action: any) {
  return _albumsReducer(state, action);
}
