import {Component, OnInit} from '@angular/core';
import {ItunesService} from "../../../control/services/itunes/itunes.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  constructor(protected iTunesService: ItunesService) {
  }

  ngOnInit(): void {
    this.iTunesService.getTopAlbums().subscribe();
  }

}
