import {Component, OnInit} from '@angular/core';
import {AlbumVO} from "../../../control/vo/album-vo";
import {Title} from "@angular/platform-browser";
import {ItunesService} from "../../../control/services/itunes/itunes.service";
import {environment} from "../../../../environments/environment";
import {AlbumDetailsDialogComponent} from "../../dialogs/album-details-dialog/album-details-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.sass']
})
export class GridPageComponent implements OnInit {
  public albums!: AlbumVO[];

  constructor(private browserTitle: Title,
              private dialog: MatDialog,
              protected iTunesService: ItunesService) {
  }

  ngOnInit(): void {
    this.browserTitle.setTitle(`Grid Layout | ${environment.appTitle}`);
    this.iTunesService.getTopAlbums().subscribe(response => this.albums = response);
  }

  openAlbumDetailsDialog(album: AlbumVO) {
    this.dialog.open(AlbumDetailsDialogComponent, {data: {album}, panelClass: ['standard-dialog']})
  }
}
