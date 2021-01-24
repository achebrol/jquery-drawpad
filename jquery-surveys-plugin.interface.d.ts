/**
 * Options for the example plugin.
 */
interface SurveysPluginOptions {
  /**
   * CSS selector for the element where generated messages are inserted. (required)
   */
  outputSelector: string;
  /**
   * Color of the message text. (optional)
   */
  outputColor?: string;

  url: string;
  assetsUrl: string;
  archer_id: string;
  survey_id: string;
  mode: string; //inline|embed
  allow_multiple: boolean;
  feedbackSource: string | HTMLElement;
}

/**
 * Global options of the example plugin available as properties on $.fn object.
 */
interface SurveysPluginGlobalOptions {
  /**
   * Global options of the example plugin.
   */
  options: SurveysPluginOptions;
}

/**
 * Function to apply the example plugin to the selected elements of a jQuery result.
 */
interface SurveysPluginFunction {
  /**
   * Apply the example plugin to the elements selected in the jQuery result.
   *
   * @param options Options to use for this application of the example plugin.
   * @returns jQuery result.
   */
  (options: SurveysPluginOptions): JQuery;
}
interface SendFeedbackPluginFunction {
  /**
   * Apply the example plugin to the elements selected in the jQuery result.
   *
   * @param options Options to use for this application of the example plugin.
   * @returns jQuery result.
   */
  (): JQuery;
}

/**
 * Declaration of the example plugin.
 */
interface SurveysPlugin
  extends SurveysPluginGlobalOptions,
    SurveysPluginFunction {}
interface SendFeedbackPlugin extends SendFeedbackPluginFunction {}

/**
 * Extend the jQuery result declaration with the example plugin.
 */
interface JQuery {
  /**
   * Extension of the example plugin.
   */
  surveysPlugin: SurveysPlugin;

  Survey: any;
  SurveyWindow: any;
}

interface JQueryStatic {
  drawpad: any;
}
