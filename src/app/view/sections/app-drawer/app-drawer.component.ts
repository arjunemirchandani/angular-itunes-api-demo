import {Component, EventEmitter, Output} from '@angular/core';
import {Observable} from "rxjs";
import {IAppMenuItem} from "../../../model/appMenu/app-menu.model";
import {appMenuItems} from "../../../model/appMenu/app-menu.selectors";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-app-drawer',
  templateUrl: './app-drawer.component.html',
  styleUrls: ['./app-drawer.component.sass']
})
export class AppDrawerComponent {
  @Output() toggleDrawer: EventEmitter<any> = new EventEmitter<any>();
  appMenu$: Observable<Array<IAppMenuItem>> = this.store.select(appMenuItems.projector);

  /**
   * constructor
   * @param store
   */
  constructor(private store: Store<Array<IAppMenuItem>>) {
  }
}
