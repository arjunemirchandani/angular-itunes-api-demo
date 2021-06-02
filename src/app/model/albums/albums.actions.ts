import {createAction, props} from '@ngrx/store';
import {Album} from "./albums.model";

export const updateList = createAction('[Albums Component] UpdateList', props<{ list: Album[] }>());
