import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {TrackVO} from "../../vo/track-vo";
import {NgxSpinnerService} from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  constructor(protected http: HttpClient,
              protected spinner: NgxSpinnerService) {
  }

  public getTopAlbums(limit = 100, responseFormat = 'json') {
    this.spinner.show().then();
    return this.http.get<any>(environment.iTunesRssUrl + '/topalbums/limit=' + limit + '/' + responseFormat).pipe(
      tap(() => this.spinner.hide()),
      tap(response => console.log("Raw Feed Response:", response)),
      map(response => response.feed.entry.map((entry: any) => TrackVO.fromJson(entry))),
    )
  }
}
