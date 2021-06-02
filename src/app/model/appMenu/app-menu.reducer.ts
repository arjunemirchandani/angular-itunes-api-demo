import {createReducer, on} from '@ngrx/store';
import {setMenuItems} from "./app-menu.actions";
import {IAppMenuItem} from "./app-menu.model";

export let initialState: Array<IAppMenuItem> = [];

const _appMenuReducer = createReducer(
  initialState,
  on(setMenuItems, (state, action: any) => action.menuItems));

export function appMenuReducer(state: any, action: any) {
  return _appMenuReducer(state, action);
}
