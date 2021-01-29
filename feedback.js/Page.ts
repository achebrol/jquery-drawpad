export class Page {
  public dom: any;
  constructor() {}
  render(dom: any) {
    this.dom = dom;
  }
  start(...args: any[]) {}
  close() {}
  data(): any {
    return undefined;
  }
  review(dom: any): any {
    return null;
  }
  end(modal: HTMLElement) {
    return true;
  }
}
