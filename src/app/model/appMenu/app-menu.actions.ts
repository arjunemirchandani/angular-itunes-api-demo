import {createAction, props} from '@ngrx/store';
import {IAppMenuItem} from "./app-menu.model";

export const setMenuItems = createAction('[AppMenu Component] setMenuItems', props<{ menuItems: IAppMenuItem[] }>());
