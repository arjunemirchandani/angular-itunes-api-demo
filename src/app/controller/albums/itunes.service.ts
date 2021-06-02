import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {HttpClient} from "@angular/common/http";
import {NgxSpinnerService} from "ngx-spinner";
import {MatSnackBar} from "@angular/material/snack-bar";
import {map, tap} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {AppUtils} from "../../../utils/app/app-utils";
import {updateList} from "../../model/albums/albums.actions";
import {Album, IAlbum} from "../../model/albums/albums.model";

/**
 * Service that fetches data from the itunes public rss feed
 */
@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  /**
   * constructor
   * @param http
   * @param store
   * @param snackBar
   * @param spinner
   */
  constructor(protected http: HttpClient,
              private readonly store: Store<Array<IAlbum>>,
              protected snackBar: MatSnackBar,
              protected spinner: NgxSpinnerService) {
  }

  /**
   * fetches the top albums from iTunes
   * @param limit
   * @param responseFormat
   */
  public getTopAlbums(limit = 100, responseFormat = 'json') {
    this.spinner.show().then();
    return this.http.get<any>(environment.iTunesRssUrl + '/topalbums/limit=' + limit + '/' + responseFormat).pipe(
      tap(() => this.snackBar.open('iTunes Service', 'Top 100 Albums Feed Fetched!', {duration: 1500})),
      tap(response => AppUtils.consoleLog("Raw Feed Response:", response)),
      // amp raw feed to array of albums vo
      map(response => response.feed.entry.map((entry: any) => Album.fromJson(entry))),
      // save new album list to model
      tap((list: []) => this.store.dispatch(updateList({list}))),
      tap(() => this.spinner.hide())
    )
  }
}
