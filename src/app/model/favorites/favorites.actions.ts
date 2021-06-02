import {createAction, props} from '@ngrx/store';
import {Album} from "../albums/albums.model";

export const toggleFavorite = createAction('[Favorites Component] toggleFavorite', props<{ album: Album }>());
