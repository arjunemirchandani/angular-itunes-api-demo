import {Component, OnInit} from '@angular/core';
import {ItunesService} from "./controller/albums/itunes.service";

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
   * constructor.
   * @param iTunesService
   */
  constructor(protected iTunesService: ItunesService) {
  }

  ngOnInit(): void {
    // load top albums from iTunes
    this.iTunesService.getTopAlbums().subscribe();
  }
}
