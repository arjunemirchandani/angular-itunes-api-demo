import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {TrackVO} from "../../vo/track-vo";

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  constructor(protected http: HttpClient) {
  }

  public getTopAlbums(limit = 100, responseFormat = 'json') {
    return this.http.get<any>(environment.iTunesRssUrl + '/topalbums/limit=' + limit + '/' + responseFormat).pipe(
      map(response => response.feed.entry.map((entry: any) => TrackVO.fromJson(entry)))
    )
  }
}
