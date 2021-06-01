import {Component, OnInit} from '@angular/core';
import {ItunesService} from "./control/services/albums/itunes.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-itunes-api-demo';

  constructor(protected iTunesService: ItunesService) {
  }

  ngOnInit(): void {
    this.iTunesService.getTopAlbums().subscribe();
  }
}
