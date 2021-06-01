import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {incrementPageView} from "../../../model/pageViews/page-views.actions";

@Injectable({
  providedIn: 'root'
})
export class PageViewsService {

  /**
   * constructor
   * @param store
   */
  constructor(private readonly store: Store<{ count: number }>) {
  }

  /**
   * increments the page views
   */
  public increment() {
    this.store.dispatch(incrementPageView());
  }
}
