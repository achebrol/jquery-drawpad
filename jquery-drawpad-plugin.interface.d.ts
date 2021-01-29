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
 * Extend the jQuery result declaration with the example plugin.
 */
interface JQuery {
  /**
   * Extension of the example plugin.
   */
  drawpad(options: Partial<DrawpadPluginOptions>): any;
}
