import {Component, EventEmitter, Output} from '@angular/core';
import {ItunesService} from "../../../controller/albums/itunes.service";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {IAppMenuItem} from "../../../model/appMenu/app-menu.model";
import {appMenuItems} from "../../../model/appMenu/app-menu.selectors";

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.sass']
})
export class HeaderSectionComponent {
  @Output() toggleDrawer: EventEmitter<any> = new EventEmitter<any>();
  appMenu$: Observable<Array<IAppMenuItem>> = this.store.select(appMenuItems.projector);

  /**
   * constructor
   * @param iTunesService
   * @param store
   */
  constructor(protected iTunesService: ItunesService,
              private store: Store<Array<IAppMenuItem>>) {
  }

  /**
   * debug function to refresh to albums upon logo click
   */
  onLogoClick() {
    this.iTunesService.getTopAlbums().subscribe();
  }
}
