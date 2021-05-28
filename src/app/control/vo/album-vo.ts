import {AppUtils} from "../util/app-utils";

export class AlbumVO {
  title!: string;
  name!: string;
  artist!: string;
  trackCount!: number;
  price!: number;
  releaseDate!: string;

  constructor(source: any = {}) {
    this.title = source?.title?.label;
    this.name = source?.name?.label;
    this.artist = source?.artist?.label;
    this.trackCount = source?.itemCount?.label;
    this.price = source?.price?.attributes?.amount;
    this.releaseDate = source?.releaseDate?.label;
  }

  static fromJson(obj: any) {
    return new AlbumVO(AppUtils.simplifyPropertyNames(obj));
  }
}
