import {createAction, props} from '@ngrx/store';
import {IAlbum} from "./albums.model";

export const updateList = createAction('[Albums Component] UpdateList', props<{ list: IAlbum[] }>());
