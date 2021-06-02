export interface IAppMenuItem {
  label: string;
  routerLink: string;
}

/**
 * App Menu Item value object
 */
export class AppMenuItem implements IAppMenuItem {
  label: string;
  routerLink: string;

  constructor(label = '', routerLink = '') {
    this.label = label
    this.routerLink = routerLink;
  }
}
