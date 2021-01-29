/**
 * Options for the example plugin.
 */
interface SurveysPluginOptions {
  url: string;
  assetsUrl: string;
  archer_id: string;
  survey_id: string;
  mode: string; //inline|embed
  allow_multiple: boolean;
  theme: string;
  css: any;
}

/**
 * Extend the jQuery result declaration with the example plugin.
 */
interface JQuery {
  surveysPlugin(options: SurveysPluginOptions): any;
  //SurveyJS Plugins to keep typescript
  Survey(options: any): JQuery;
  SurveyWindow(options: any): JQuery;
}
