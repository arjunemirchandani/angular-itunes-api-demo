import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../../environments/environment";
import {AlbumDetailsDialogComponent} from "../../dialogs/album-details-dialog/album-details-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {albumsList} from "../../../model/albums/albums.selectors";
import {PageViewsService} from "../../../control/services/pageViews/page-views.service";
import {Album, IAlbum} from "../../../model/albums/albums.model";

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.sass']
})
export class GridPageComponent implements OnInit {
  albums$: Observable<Array<IAlbum>> = this.store.select(albumsList.projector);

  constructor(private browserTitle: Title,
              private pageViewsService: PageViewsService,
              private dialog: MatDialog,
              private store: Store<Array<IAlbum>>) {
  }

  ngOnInit(): void {
    this.browserTitle.setTitle(`Grid Layout | ${environment.appTitle}`);
    this.pageViewsService.increment();
  }

  openAlbumDetailsDialog(album: Album | null) {
    this.dialog.open(AlbumDetailsDialogComponent, {data: {album}, panelClass: ['standard-dialog']})
  }
}
