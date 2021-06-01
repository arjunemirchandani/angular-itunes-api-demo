import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../model/app.state";
import {albumsList} from "../../../model/albums/albums.selectors";
import {PageViewsService} from "../../../control/services/pageViews/page-views.service";

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.sass']
})
export class TablePageComponent implements OnInit {
  albums$: Observable<AppState> = this.store.select(albumsList.projector);

  constructor(private browserTitle: Title,
              private store: Store,
              private pageViewsService: PageViewsService) {
  }

  ngOnInit(): void {
    this.browserTitle.setTitle(`Table Layout | ${environment.appTitle}`);
    this.pageViewsService.increment();
  }
}
