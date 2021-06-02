import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {albumsList} from "../../../model/albums/albums.selectors";
import {PageViewsService} from "../../../controller/pageViews/page-views.service";
import {favorites} from "../../../model/favorites/favorites.selectors";
import {FavoritesService} from "../../../controller/favorites/favorites.service";
import {IAlbum} from "../../../model/albums/albums.model";

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.sass']
})
export class TablePageComponent implements OnInit {
  albums$: Observable<Array<IAlbum>> = this.storeAlbums.select(albumsList.projector);
  favorites$: Observable<string[]> = this.storeFavorite.select(favorites.projector);

  constructor(private browserTitle: Title,
              private storeAlbums: Store<Array<IAlbum>>,
              private storeFavorite: Store<Array<string>>,
              private pageViewsService: PageViewsService,
              private favoritesService: FavoritesService) {
  }

  ngOnInit(): void {
    this.browserTitle.setTitle(`Table Layout | ${environment.appTitle}`);
    this.pageViewsService.increment();
  }

  toggleFavorite(album: any) {
    this.favoritesService.toggleFavorite(album);
  }
}
