import {Injectable} from '@angular/core';
import {Album} from "../../../model/albums/albums.model";
import {Store} from "@ngrx/store";
import {MatSnackBar} from "@angular/material/snack-bar";
import {toggleFavorite} from "../../../model/favorites/favorites.actions";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  /**
   * constructor
   * @param store
   * @param snackBar
   */
  constructor(private readonly store: Store<Array<string>>,
              private snackBar: MatSnackBar) {
  }

  /**
   * toggle inclusion of album into favorites array
   * @param album
   */
  public toggleFavorite(album: Album) {
    this.snackBar.open('favorites Service', 'Album favorite toggled!', {duration: 1500});
    this.store.dispatch(toggleFavorite({album}));
  }
}
