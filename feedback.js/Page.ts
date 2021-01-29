export class Page {
  protected dom: any;
  constructor() {}
  render(dom: any) {
    this.dom = dom;
  }
  start(...args: any[]) {}
  close() {}
  data() {
    return false;
  }
  review(dom: any): any {
    return null;
  }
  end(modal: HTMLElement) {
    return true;
  }
}
