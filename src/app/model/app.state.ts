import {PageViews} from "./pageViews/page-views.model";
import {Album} from "./albums/albums.model";

/**
 * Application Model state
 */
export interface AppState {

  // array of album id strings that have been to favorites
  favorites: Array<string>;

  // array of albums
  albums: Array<Album>;

  // application page views
  pageViews: PageViews
}
