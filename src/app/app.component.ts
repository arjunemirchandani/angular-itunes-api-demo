import {Component, OnInit} from '@angular/core';
import {ItunesService} from "./controller/albums/itunes.service";
import {AppMenuService} from "./controller/appMenu/app-menu.service";
import {AppMenuItem} from "./model/appMenu/app-menu.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
/**
 * Main application component
 */
export class AppComponent implements OnInit {
  title = 'angular-itunes-api-demo';

  /**
   * constructor
   * @param appMenuService
   * @param iTunesService
   */
  constructor(protected appMenuService: AppMenuService,
              protected iTunesService: ItunesService) {
  }

  ngOnInit(): void {

    // set application menu items
    this.appMenuService.setMenuItems([
      new AppMenuItem('About', '/'),
      new AppMenuItem('Table Layout', '/table'),
      new AppMenuItem('Grid Layout', '/grid'),
      new AppMenuItem('Contact', '/contact'),
    ]);

    // load top albums from iTunes
    this.iTunesService.getTopAlbums().subscribe();
  }
}
