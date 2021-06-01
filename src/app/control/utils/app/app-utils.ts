/**
 * A set of generic utilities that can be utilized anywhere in the application
 */
import {environment} from "../../../../environments/environment";

export class AppUtils {

  /**
   * strips out the colon from object property names
   * @param obj
   */
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

  /**
   * logs messages to the javascript console only in dev mode
   * @param data
   */
  static consoleLog(...data: any[]) {
    return environment.production ? null : console.log(data)
  }
}
