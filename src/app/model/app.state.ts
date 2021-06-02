import {IAlbum} from "./albums/albums.model";

/**
 * Application Model state
 */
export interface AppState {

  // array of albums
  albums: Array<IAlbum>;

  // array of album id strings that have been to favorites
  favorites: Array<string>;

  // application page views
  pageViews: number
}
