/**
 * Options for the example plugin.
 */
interface FeedbackPluginOptions {
  archer_id: string;
  url: string;
  assetsUrl: string;
}

/**
 * Global options of the example plugin available as properties on $.fn object.
 */
interface FeedbackPluginGlobalOptions {
  /**
   * Global options of the example plugin.
   */
  options: FeedbackPluginOptions;
}

/**
 * Function to apply the example plugin to the selected elements of a jQuery result.
 */
interface FeedbackPluginFunction {
  /**
   * Apply the example plugin to the elements selected in the jQuery result.
   *
   * @param options Options to use for this application of the example plugin.
   * @returns jQuery result.
   */
  (options: FeedbackPluginOptions): JQuery;
}

/**
 * Extend the jQuery result declaration with the example plugin.
 */
interface JQuery {
  feedback: any;
}

interface JQueryStatic {
  feedback: any;
}
