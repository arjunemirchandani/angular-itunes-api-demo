export class TrackVO {
  title!: string;
  artist!: string;
  price!: number;

  constructor(title = '', artist = '', price = 0) {
    this.title = title;
    this.artist = artist;
    this.price = price;
  }

  static fromJson(obj: any) {
    let newObj = this.simplifyPropertyNames(obj);
    return new TrackVO(newObj.title.label, newObj.artist.label, newObj.price.attributes.amount);
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
