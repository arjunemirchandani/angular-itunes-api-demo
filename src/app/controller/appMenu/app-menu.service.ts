import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {IAppMenuItem} from "../../model/appMenu/app-menu.model";
import {setMenuItems} from "../../model/appMenu/app-menu.actions";

@Injectable({
  providedIn: 'root'
})
/**
 * used for app menu ui buttons in header and drawer
 */
export class AppMenuService {

  /**
   * constructor
   * @param store
   */
  constructor(private readonly store: Store<{ menuItems: IAppMenuItem[] }>) {
  }

  /**
   * set menu items
   */
  public setMenuItems(menuItems: IAppMenuItem[]) {
    this.store.dispatch(setMenuItems({menuItems}));
  }
}
