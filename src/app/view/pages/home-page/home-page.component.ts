import {Component, OnInit} from '@angular/core';
import {ItunesService} from "../../../control/services/itunes/itunes.service";
import {Title} from "@angular/platform-browser";
import {environment} from "../../../../environments/environment";
import {AlbumVO} from "../../../control/vo/album-vo";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  public tracks!: AlbumVO[];

  constructor(private browserTitle: Title,
              protected iTunesService: ItunesService) {
  }

  ngOnInit(): void {
    this.browserTitle.setTitle(`Home | ${environment.appTitle}`);
    this.iTunesService.getTopAlbums().subscribe(response => this.tracks = response);
  }
}
