/* 
	cnbilgin 
	https://github.com/cnbilgin/jquery-drawpad
	v 0.1
*/

import {
  blobToCanvas,
  getJpegBlob,
  takeScreenshotJpegBlob
} from './media-utilities';
import { SurveysService } from './surveys.service';

(function ($) {
  const pluginSuffix = 'feedback';
  let surveyservice: SurveysService;
  $.feedback = function (element: HTMLElement, options: FeedbackPluginOptions) {
    let plugin = this;
    let $element = $(element);
    let defaults = {
      url: 'https://aa-nps-admin-gw-apim.azure-api.net/graphql'
    };
    plugin.settings = {};

    /* private methods */

    const initialize = () => {
      surveyservice = new SurveysService({
        allow_multiple: false,
        archer_id: plugin.settings.archer_id,
        url: plugin.settings.url,
        assetsUrl: null,
        feedbackSource: null,
        mode: '',
        outputSelector: '',
        survey_id: ''
      });
      $element.addClass(pluginSuffix);
      jQuery('.feedback-close').on('click', () => {
        jQuery('.feedback-glass').hide();
        jQuery('.feedback-modal').hide();
      });
      jQuery('.feedback-btn.close-btn').on('click', () => {
        jQuery('.feedback-glass').hide();
        jQuery('.feedback-modal').hide();
      });
      jQuery('.feedback-btn.continue-btn').on('click', async () => {
        var data = {
          comments: jQuery('.feedback-comments').eq(0).val(),
          employee_name: jQuery('.feedback-name').eq(0).val(),
          employee_email: jQuery('.feedback-email').eq(0).val(),
          screen_shot: plugin.getBytes()
        };
        await surveyservice.postUserFeedback(data);
        jQuery('.feedback-modal').removeClass('large');
        jQuery('.feedback-body')
          .eq(0)
          .html(
            '<h3>Thank you for your feedback.we will contact you if we need more information</h3>'
          );
        jQuery('.feedback-btn').hide();
        jQuery('.feedback-btn.close-btn').show();
      });
      jQuery('.feedback-screenshot').on('click', async () => {
        jQuery('.feedback-glass').hide();
        jQuery('.feedback-modal').hide();
        var screenshotJpegBlob = await takeScreenshotJpegBlob();
        plugin = jQuery('.feedback-canvas').show().drawpad();
        plugin.setCaptureScreen(screenshotJpegBlob);
        jQuery('.feedback-info').show().delay(5000).fadeOut();
      });
    };

    /* public methods */
    plugin.init = function () {
      plugin.settings = $.extend({}, defaults, options);
      initialize();
      return plugin;
    };

    plugin.show = function () {
      jQuery('.feedback-glass').show();
      jQuery('.feedback-modal').show();
      jQuery('.feedback-btn.close-btn').hide();
      jQuery('.feedback-btn.continue-btn').show();
    };
    plugin.init();
  };

  $.fn.feedback = function (options: FeedbackPluginOptions) {
    if ($(this).data(pluginSuffix) === undefined) {
      var plugin = new $.feedback(this, options);
      $(this).data(pluginSuffix, plugin);
    }
    return $(this).data(pluginSuffix);
  };
})(jQuery);
