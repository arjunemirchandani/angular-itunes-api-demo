import {createAction, props} from '@ngrx/store';
import {AlbumVO} from "../../control/vos/album/album-vo";

export const updateList = createAction('[Albums Component] UpdateList', props<{ list: AlbumVO[] }>());
