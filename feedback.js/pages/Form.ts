import { element, emptyElements } from '../Core';
import { Page } from '../Page';

export class Form extends Page {
  private elements: any[];
  constructor(elements: any[]) {
    super();
    this.elements = elements || [
      {
        type: 'textarea',
        name: 'comments',
        label: 'Please describe the issue you are experiencing',
        required: false
      },
      {
        type: 'text',
        name: 'employee_name',
        label: 'Your Name',
        required: false
      },
      {
        type: 'text',
        name: 'employee_email',
        label: 'Your EMail',
        required: false
      }
    ];

    this.dom = document.createElement('div');
  }
  render() {
    var i = 0,
      len = this.elements.length,
      item;
    emptyElements(this.dom);
    for (; i < len; i++) {
      item = this.elements[i];

      switch (item.type) {
        case 'textarea':
          this.dom.appendChild(
            element(
              'label',
              item.label + ':' + (item.required === true ? ' *' : '')
            )
          );
          this.dom.appendChild(
            (item.element = document.createElement('textarea'))
          );
          break;
        case 'text':
          this.dom.appendChild(
            element(
              'label',
              item.label + ':' + (item.required === true ? ' *' : '')
            )
          );
          this.dom.appendChild(
            (item.element = document.createElement('input'))
          );
          break;
      }
    }

    return this;
  }
  end() {
    // form validation
    var i = 0,
      len = this.elements.length,
      item;
    for (; i < len; i++) {
      item = this.elements[i];

      // check that all required fields are entered
      if (item.required === true && item.element.value.length === 0) {
        item.element.className = 'fb-error';
        return false;
      } else {
        item.element.className = '';
      }
    }

    return true;
  }
  data() {
    //if (this._data !== undefined) {
    // return cached value
    //  return this._data;
    //}

    var i = 0,
      len = this.elements.length,
      item,
      data: any = {};

    for (; i < len; i++) {
      item = this.elements[i];
      data[item.name] = item.element.value;
    }

    // cache and return data
    return data;
  }
  review(dom: any): any {
    var i = 0,
      item,
      len = this.elements.length;

    for (; i < len; i++) {
      item = this.elements[i];

      if (item.element.value.length > 0) {
        dom.appendChild(element('label', item.label + ':'));
        var el = document.createElement('div');
        el.innerText = item.element.value;
        dom.appendChild(el);
        dom.appendChild(document.createElement('hr'));
      }
    }

    return dom;
  }
}
