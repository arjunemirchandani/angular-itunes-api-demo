import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {NgxSpinnerService} from "ngx-spinner";
import {AlbumVO} from "../../vo/album-vo";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AppUtils} from "../../util/app-utils";

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
   * @param snackBar
   * @param spinner
   */
  constructor(protected http: HttpClient,
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
      tap(() => this.spinner.hide()),
      tap(() => this.snackBar.open('iTunes Service', 'Top 100 Albums Feed Fetched!', {duration: 1500})),
      tap(response => AppUtils.consoleLog("Raw Feed Response:", response)),
      map(response => response.feed.entry.map((entry: any) => AlbumVO.fromJson(entry))),
    )
  }
}
