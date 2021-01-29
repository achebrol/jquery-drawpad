import { Send } from '../Send';

export class XHR extends Send {
  private url: string;
  private xhr: XMLHttpRequest;
  constructor(url: string) {
    super();
    this.url = url;
    this.xhr = new XMLHttpRequest();
  }
  send(data: any, callback: Function) {
    this.xhr.onreadystatechange = () => {
      if (this.xhr.readyState == 4) {
        callback(this.xhr.status === 200);
      }
    };

    this.xhr.open('POST', this.url, true);
    this.xhr.setRequestHeader(
      'Content-type',
      'application/x-www-form-urlencoded'
    );
    this.xhr.send('data=' + encodeURIComponent(window.JSON.stringify(data)));
  }
}
