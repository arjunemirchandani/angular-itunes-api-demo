/**
 * Album value object
 */
import {AppUtils} from "../../utils/app/app-utils";

export class AlbumVO {
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
    this.title = source?.title?.label;
    this.name = source?.name?.label;
    this.artist = source?.artist?.label;
    this.trackCount = source?.itemCount?.label;
    this.price = source?.price?.attributes?.amount;
    this.releaseDate = source?.releaseDate?.label;
    if (source?.image && source?.image.length === 3) {
      this.albumArt = source.image[2].label;
    }
  }

  /**
   * converts an object to a Album value object
   * @param obj
   */
  static fromJson(obj: any) {
    return new AlbumVO(AppUtils.simplifyPropertyNames(obj));
  }
}
