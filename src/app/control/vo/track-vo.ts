export class TrackVO {
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
    return new TrackVO(this.simplifyPropertyNames(obj));
  }

  static simplifyPropertyNames(obj: any) {
    let newObj: any = {};
    for (let k in obj) {
      if (k.includes(':')) {
        newObj[k.split(':')[1]] = obj[k];
      } else {
        newObj[k] = obj[k];
      }
    }
    return newObj;
  }
}
