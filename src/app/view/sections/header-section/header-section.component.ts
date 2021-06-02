import {Component, EventEmitter, Output} from '@angular/core';
import {ItunesService} from "../../../control/services/albums/itunes.service";

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.sass']
})
export class HeaderSectionComponent {
  @Output() toggleDrawer: EventEmitter<any> = new EventEmitter<any>();

  /**
   * constructor.
   * @param iTunesService
   */
  constructor(protected iTunesService: ItunesService) {
  }

  onLogoClick() {
    this.iTunesService.getTopAlbums().subscribe();
  }
}
