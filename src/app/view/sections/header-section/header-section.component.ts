import {Component, EventEmitter, Output} from '@angular/core';
import {ItunesService} from "../../../controller/albums/itunes.service";

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.sass']
})
export class HeaderSectionComponent {
  @Output() toggleDrawer: EventEmitter<any> = new EventEmitter<any>();

  /**
   * constructor
   * @param iTunesService
   */
  constructor(protected iTunesService: ItunesService) {
  }

  /**
   * debug function to refresh to albums upon logo click
   */
  onLogoClick() {
    this.iTunesService.getTopAlbums().subscribe();
  }
}
