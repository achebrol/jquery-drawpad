/**
 * Options for the example plugin.
 */
interface DrawpadPluginOptions {
  defaultColor: string;
  /**
   * Color of the message text. (optional)
   */
  colors: string[];

  eraserSize: number;
}

/**
 * Global options of the example plugin available as properties on $.fn object.
 */
interface DrawpadPluginGlobalOptions {
  /**
   * Global options of the example plugin.
   */
  options: DrawpadPluginOptions;
}

/**
 * Function to apply the example plugin to the selected elements of a jQuery result.
 */
interface DrawpadPluginFunction {
  /**
   * Apply the example plugin to the elements selected in the jQuery result.
   *
   * @param options Options to use for this application of the example plugin.
   * @returns jQuery result.
   */
  (options: DrawpadPluginOptions): JQuery;
}

/**
 * Declaration of the example plugin.
 */
interface SurveysPlugin
  extends SurveysPluginGlobalOptions,
    SurveysPluginFunction {}

/**
 * Extend the jQuery result declaration with the example plugin.
 */
interface JQuery {
  /**
   * Extension of the example plugin.
   */
  drawpad: any;
}

interface JQueryStatic {
  drawpad: any;
}
