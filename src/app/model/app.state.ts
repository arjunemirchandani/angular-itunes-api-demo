import {PageViews} from "./pageViews/page-views.model";
import {Albums} from "./albums/albums.model";

export interface AppState {
  albums: Albums,
  pageViews: PageViews
}
