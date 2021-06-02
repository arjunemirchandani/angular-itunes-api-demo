import {AppUtils} from "../../control/utils/app/app-utils";

export interface IAlbum {
  id: string;
  title: string;
  name: string;
  artist: string;
  trackCount: number;
  price: number;
  releaseDate: string;
  albumArt: string;
}

/**
 * Album value object
 */
export class Album implements IAlbum {
  id!: string;
  title!: string;
  name!: string;
  artist!: string;
  trackCount!: number;
  price!: number;
  releaseDate!: string;
  albumArt!: string;

  /**
   * constructor
   * @param source
   */
  constructor(source: any = {}) {
    this.id = source?.id?.label;
    this.title = source?.title?.label;
    this.name = source?.name?.label;
    this.artist = source?.artist?.label;
    this.trackCount = source?.itemCount?.label;
    this.price = source?.price?.attributes?.amount;
    this.releaseDate = source?.releaseDate?.label;
    // get the third image from the array--largest sized thumbnail
    if (source?.image && source?.image.length === 3) {
      this.albumArt = source.image[2].label;
    }
  }

  /**
   * converts an object to a Album value object
   * @param obj
   */
  static fromJson(obj: any) {
    // return album vo with colons removed from key names
    return new Album(AppUtils.simplifyPropertyNames(obj));
  }
}
