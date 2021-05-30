import {Component, OnInit} from '@angular/core';
import {AlbumVO} from "../../../control/vo/album-vo";
import {Title} from "@angular/platform-browser";
import {ItunesService} from "../../../control/services/itunes/itunes.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.sass']
})
export class TablePageComponent implements OnInit {
  public albums!: AlbumVO[];

  constructor(private browserTitle: Title,
              protected iTunesService: ItunesService) {
  }

  ngOnInit(): void {
    this.browserTitle.setTitle(`Table Layout | ${environment.appTitle}`);
    this.iTunesService.getTopAlbums().subscribe(response => this.albums = response);
  }
}
