import {PageViews} from "./pageViews/page-views.model";
import {Albums} from "./albums/albums.model";

/**
 * Application Model state
 */
export interface AppState {

  // list of albums
  albums: Albums,

  // application page views
  pageViews: PageViews
}
