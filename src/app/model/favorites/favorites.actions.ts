import {createAction, props} from '@ngrx/store';
import {IAlbum} from "../albums/albums.model";

export const toggleFavorite = createAction('[Favorites Component] toggleFavorite', props<{ album: IAlbum }>());
