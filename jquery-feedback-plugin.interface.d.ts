interface FeedbackPluginOptions {
  archer_id: string;
  url: string;
  assetsUrl: string;
}
interface JQuery {
  feedback(options: FeedbackPluginOptions): any;
}
