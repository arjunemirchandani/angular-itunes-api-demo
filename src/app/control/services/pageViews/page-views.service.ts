import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {incrementPageView} from "../../../model/pageViews/page-views.actions";

/**
 * Service that manages app page views
 */
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
    // increment page view model
    this.store.dispatch(incrementPageView());
  }
}
