import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {pageViews} from "../../../model/pageViews/page-views.selectors";

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.sass']
})
export class FooterSectionComponent {
  pageViews$: Observable<number> = this.store.select(pageViews.projector);

  /**
   * constructor
   * @param store
   */
  constructor(private store: Store) {
  }
}
