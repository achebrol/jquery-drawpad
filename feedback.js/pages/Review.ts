import { emptyElements } from '../Core';
import { Page } from '../Page';

export class Review extends Page {
  constructor() {
    super();
    this.dom = document.createElement('div');
    this.dom.className = 'fb-review';
  }
  render(pages: any[]) {
    var i = 0,
      len = pages.length,
      item;
    emptyElements(this.dom);

    for (; i < len; i++) {
      // get preview DOM items
      pages[i].review(this.dom);
    }

    return this;
  }
}
