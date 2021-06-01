import {createAction, props} from '@ngrx/store';

export const updateList = createAction('[Albums Component] UpdateList', props<{ list: [] }>());
