export class TrackVO {
  title!: string;
  artist!: string;

  constructor(title: string = '', artist: string = '') {
    this.title = title;
    this.artist = artist;
  }

  static fromJson(obj: any) {
    let newObj = this.simplifyPropertyNames(obj);
    return new TrackVO(newObj.title.label, newObj.artist.label);
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
