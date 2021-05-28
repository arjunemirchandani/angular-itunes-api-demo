export class AppUtils {
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
