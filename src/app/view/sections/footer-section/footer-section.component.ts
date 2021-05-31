import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {AppState} from "../../../state/app.state";
import {pageViewsTotal} from "../../../state/pageViews/page-views.selectors";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.sass']
})
export class FooterSectionComponent {
  pageViews$: Observable<AppState> = this.store.select(pageViewsTotal.projector);

  constructor(private store: Store) {
  }
}
