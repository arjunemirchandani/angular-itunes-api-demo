import {Component, OnInit} from '@angular/core';
import {ItunesService} from "../../../control/services/itunes/itunes.service";
import {TrackVO} from "../../../control/vo/track-vo";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  public tracks!: TrackVO[];

  constructor(protected iTunesService: ItunesService) {
  }

  ngOnInit(): void {
    this.iTunesService.getTopAlbums().subscribe(response => this.tracks = response);
  }
}
