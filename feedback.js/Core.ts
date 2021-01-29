import { Form } from './pages/Form';
import { Review } from './pages/Review';
import { Screenshot } from './pages/Screenshot';
import { Send } from './Send';
import { XHR } from './send/xhr';

// log proxy function
export const log = function (msg: any) {
  window.console.log(msg);
};
// function to remove elements, input as arrays
export const removeElements = function (remove: any) {
  //HTMLElement[]
  for (var i = remove.length - 1; i >= 0; i--) {
    //remove[i].remove();
    var item = remove[i];
    if (item !== undefined) {
      if (item.parentNode !== null) {
        // check that the item was actually added to DOM
        item.parentNode.removeChild(item);
      }
    }
  }
};
export const loader = function () {
  var div = document.createElement('div'),
    i = 3;
  div.className = 'fb-loader';

  while (i--) {
    div.appendChild(document.createElement('span'));
  }
  return div;
};
export const getBounds = function (el: HTMLElement) {
  return el.getBoundingClientRect();
};
export const emptyElements = function (el: HTMLElement) {
  var item;
  while ((item = el.firstChild) !== null ? el.removeChild(item) : false) {}
};
export const element = function (name: string, text: string) {
  var el = document.createElement(name);
  el.appendChild(document.createTextNode(text));
  return el;
};
// script onload function to provide support for IE as well
export const scriptLoader = function (script: any, func: Function) {
  if (script.onload === undefined) {
    // IE lack of support for script onload

    if (script.onreadystatechange !== undefined) {
      var intervalFunc = function () {
        if (
          script.readyState !== 'loaded' &&
          script.readyState !== 'complete'
        ) {
          window.setTimeout(intervalFunc, 250);
        } else {
          // it is loaded
          func();
        }
      };

      window.setTimeout(intervalFunc, 250);
    } else {
      log("ERROR: We can't track when script is loaded");
    }
  } else {
    return func;
  }
};
export const H2C_IGNORE = 'data-html2canvas-ignore';
export const modalBody = document.createElement('div');

export class Feedback {
  private options: any;
  private modal: HTMLElement;
  private currentPage: number;
  private button: any;
  private nextButton: any = null;
  private glass = document.createElement('div');

  constructor(options: any) {
    this.options = options || {};

    // default properties
    this.options.label = this.options.label || 'Send Feedback';
    this.options.header = this.options.header || 'Send Feedback';
    this.options.url = this.options.url || '/';
    this.options.adapter = this.options.adapter || new XHR(options.url);

    this.options.nextLabel = this.options.nextLabel || 'Continue';
    this.options.reviewLabel = this.options.reviewLabel || 'Review';
    this.options.sendLabel = this.options.sendLabel || 'Send';
    this.options.closeLabel = this.options.closeLabel || 'Close';

    this.options.messageSuccess =
      this.options.messageSuccess || 'Your feedback was sent successfully.';
    this.options.messageError =
      this.options.messageError ||
      'There was an error sending your feedback to the server.';

    if (this.options.pages === undefined) {
      this.options.pages = [
        new Form(undefined),
        new Screenshot(this.options),
        new Review()
      ];
    }
    this.glass.className = 'fb-glass';
    this.glass.style.pointerEvents = 'none';
    this.glass.setAttribute(H2C_IGNORE, 'true');

    this.button = element('button', this.options.label);
    this.button.className = 'fb-btn fb-bottom-right';

    this.button.setAttribute(H2C_IGNORE, true);

    this.button.onclick = this.open;

    if (options.appendTo !== null) {
      (options.appendTo !== undefined
        ? options.appendTo
        : document.body
      ).appendChild(this.button);
    }
  }
  public open() {
    var len = this.options.pages.length;
    this.currentPage = 0;
    for (; this.currentPage < len; this.currentPage++) {
      // create DOM for each page in the wizard
      if (!(this.options.pages[this.currentPage] instanceof Review)) {
        this.options.pages[this.currentPage].render();
      }
    }

    var a: HTMLAnchorElement = element('a', 'X') as HTMLAnchorElement,
      modalHeader = document.createElement('div'),
      // modal container
      modalFooter = document.createElement('div');

    this.modal = document.createElement('div');
    document.body.appendChild(this.glass);

    // modal close button
    a.className = 'fb-close';
    a.onclick = this.close.bind(this);
    a.href = '#';

    this.button.disabled = true;

    // build header element
    modalHeader.appendChild(a);
    modalHeader.appendChild(element('h3', this.options.header));
    modalHeader.className = 'fb-header';

    modalBody.className = 'fb-body';

    emptyElements(modalBody);
    this.currentPage = 0;
    modalBody.appendChild(this.options.pages[this.currentPage++].dom);

    // Next button
    this.nextButton = element('button', this.options.nextLabel);

    this.nextButton.className = 'fb-btn';
    this.nextButton.onclick = () => {
      if (this.currentPage > 0) {
        if (
          this.options.pages[this.currentPage - 1].end(this.modal) === false
        ) {
          // page failed validation, cancel onclick
          return;
        }
      }

      emptyElements(modalBody);

      if (this.currentPage === len) {
        this.send(this.options.adapter);
      } else {
        this.options.pages[this.currentPage].start(
          this.modal,
          modalHeader,
          modalFooter,
          this.nextButton
        );

        if (this.options.pages[this.currentPage] instanceof Review) {
          // create DOM for review page, based on collected data
          this.options.pages[this.currentPage].render(this.options.pages);
        }

        // add page DOM to modal
        modalBody.appendChild(this.options.pages[this.currentPage++].dom);

        // if last page, change button label to send
        if (this.currentPage === len) {
          this.nextButton.firstChild.nodeValue = this.options.sendLabel;
        }

        // if next page is review page, change button label
        if (this.options.pages[this.currentPage] instanceof Review) {
          this.nextButton.firstChild.nodeValue = this.options.reviewLabel;
        }
      }
    };

    modalFooter.className = 'fb-footer';
    modalFooter.appendChild(this.nextButton);

    this.modal.className = 'fb-modal';
    this.modal.setAttribute(H2C_IGNORE, 'true'); // don't render in html2canvas

    this.modal.appendChild(modalHeader);
    this.modal.appendChild(modalBody);
    this.modal.appendChild(modalFooter);

    document.body.appendChild(this.modal);
  }
  public close() {
    this.button.disabled = false;

    // remove feedback elements
    removeElements([this.modal, this.glass]);

    // call end event for current page
    if (this.currentPage > 0) {
      this.options.pages[this.currentPage - 1].end(this.modal);
    }

    // call close events for all pages
    for (var i = 0, len = this.options.pages.length; i < len; i++) {
      this.options.pages[i].close();
    }

    return false;
  }
  public send(adapter: any): any {
    // make sure send adapter is of right prototype
    if (!(adapter instanceof Send)) {
      throw new Error('Adapter is not an instance of Feedback.Send');
    }

    // fetch data from all pages
    for (
      var i = 0, len = this.options.pages.length, data = [], p = 0, tmp;
      i < len;
      i++
    ) {
      if ((tmp = this.options.pages[i].data()) !== false) {
        data[p++] = tmp;
      }
    }

    this.nextButton.disabled = true;

    emptyElements(modalBody);
    modalBody.appendChild(loader());

    // send data to adapter for processing
    adapter.send(data, (success: any) => {
      emptyElements(modalBody);
      this.nextButton.disabled = false;

      this.nextButton.firstChild.nodeValue = this.options.closeLabel;

      this.nextButton.onclick = () => {
        this.close();
        return false;
      };

      if (success === true) {
        modalBody.appendChild(
          document.createTextNode(this.options.messageSuccess)
        );
      } else {
        modalBody.appendChild(
          document.createTextNode(this.options.messageError)
        );
      }
    });
  }
}
