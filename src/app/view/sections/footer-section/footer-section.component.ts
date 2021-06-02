import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {pageViewsTotal} from "../../../model/pageViews/page-views.selectors";
import {AppState} from "../../../model/app.state";
import {albumsList} from "../../../model/albums/albums.selectors";

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.sass']
})
export class FooterSectionComponent {
  pageViews$: Observable<AppState> = this.store.select(pageViewsTotal.projector);
  albums$: Observable<AppState> = this.store.select(albumsList.projector);

  constructor(private store: Store) {
    this.albums$.subscribe();
  }
}
