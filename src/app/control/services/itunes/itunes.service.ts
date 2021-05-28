import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ItunesService {

  constructor(protected http: HttpClient) {
  }

  public getTopAlbums(limit = 100, responseFormat = 'json') {
    return this.http.get<any>(environment.iTunesRssUrl + '/topalbums/limit=' + limit + '/' + responseFormat).pipe(
      tap((response: any) => console.log(response)));
  }
}
