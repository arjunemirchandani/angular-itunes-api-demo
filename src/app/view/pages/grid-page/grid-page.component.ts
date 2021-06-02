import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../../environments/environment";
import {AlbumDetailsDialogComponent} from "../../dialogs/album-details-dialog/album-details-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {albumsList} from "../../../model/albums/albums.selectors";
import {AppState} from "../../../model/app.state";
import {PageViewsService} from "../../../control/services/pageViews/page-views.service";
import {Album} from "../../../model/albums/albums.model";

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.sass']
})
export class GridPageComponent implements OnInit {
  albums$: Observable<AppState> = this.store.select(albumsList.projector);
  albums!: any;

  constructor(private browserTitle: Title,
              private pageViewsService: PageViewsService,
              private dialog: MatDialog,
              private store: Store) {
  }

  ngOnInit(): void {
    this.browserTitle.setTitle(`Grid Layout | ${environment.appTitle}`);
    this.pageViewsService.increment();
    this.albums$.subscribe(response => this.albums = response.albums)
  }

  openAlbumDetailsDialog(album: Album | null) {
    this.dialog.open(AlbumDetailsDialogComponent, {data: {album}, panelClass: ['standard-dialog']})
  }
}
