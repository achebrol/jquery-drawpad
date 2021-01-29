//import $ from 'jquery';
import { GLOBAL_OPTIONS } from './global-options';
import { SurveysService } from './surveys.service';

export class SurveysPlugin {
  element: JQuery;
  options: SurveysPluginOptions;
  surveyservice: SurveysService;
  constructor(element: JQuery, options: SurveysPluginOptions) {
    this.element = element;
    this.options = $.extend({}, GLOBAL_OPTIONS, options);
    this.initialize();
  }
  /*Private Methods */
  private initialize() {
    this.surveyservice = new SurveysService(this.options);
    this.surveyservice.initializeSurvey();
  }
  /*Public Methods */
}
(function ($: JQueryStatic) {
  const pluginSuffix = 'surveys';
  $.fn.surveysPlugin = function (options: SurveysPluginOptions) {
    if ($(this).data(pluginSuffix) === undefined) {
      var plugin = new SurveysPlugin(this, options);
      $(this).data(pluginSuffix, plugin);
    }
    return $(this).data(pluginSuffix);
  };
})(jQuery);
