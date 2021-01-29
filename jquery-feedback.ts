import { Feedback } from './feedback.js/Core';
import { SaveResultsAdapter } from './feedback.js/SaveResultsAdaptor';
import {
  IsDisplayMediaSupported,
  takeScreenshotJpegBlob
} from './media-utilities';
import { SurveysService } from './surveys.service';

(function ($) {
  const pluginSuffix = 'feedback';
  let surveyservice: SurveysService;
  let feedbackDialog: Feedback;
  $.feedback = function (element: HTMLElement, options: FeedbackPluginOptions) {
    let plugin = this;
    let $element = $(element);
    let defaults = {
      url: 'https://aa-nps-admin-gw-apim.azure-api.net/graphql',
      assetsUrl: 'https://aanpsadminui.z13.web.core.windows.net'
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
        const comments = jQuery('.feedback-comments').eq(0).val() as string;
        if (comments.length == 0) {
          jQuery('.feedback-comments').addClass('feedback-error');
          return;
        }
        var data = {
          comments: jQuery('.feedback-comments').eq(0).val(),
          employee_name: jQuery('.feedback-name').eq(0).val(),
          employee_email: jQuery('.feedback-email').eq(0).val(),
          screen_shot: plugin.getBytes()
        };
        try {
          await surveyservice.postUserFeedback(data);
          jQuery('.feedback-modal').removeClass('large');
          /*jQuery('.feedback-body')
          .eq(0)
          .html(
            '<h3>Thank you for your feedback.we will contact you if we need more information</h3>'
          );*/
          jQuery('.feedback-body > div > h3').show().siblings().hide();

          jQuery('.feedback-btn').hide();
          jQuery('.feedback-btn.close-btn').show();
        } catch (err) {
          console.log(err);
          alert('There was an error sending your feedback to the server.');
        }
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

    const initializeClassicVersion = () => {
      feedbackDialog = new Feedback({
        h2cPath: `${plugin.settings.assetsUrl}/assets/html2canvas.js`,
        appendTo: null, // don't add feedback button to page
        adapter: new SaveResultsAdapter(plugin.settings)
      });
    };

    /* public methods */
    plugin.init = function () {
      plugin.settings = $.extend({}, defaults, options);
      plugin.displayMediaSupported = IsDisplayMediaSupported();
      plugin.displayMediaSupported = false; //to test in chrome
      if (plugin.displayMediaSupported) {
        initialize();
      } else {
        initializeClassicVersion();
      }
      return plugin;
    };

    plugin.show = function () {
      if (plugin.displayMediaSupported) {
        jQuery('.feedback-glass').show();
        jQuery('.feedback-modal').show();
        jQuery('.feedback-btn.close-btn').hide();
        jQuery('.feedback-btn.continue-btn').show();
        jQuery('.feedback-comments').eq(0).val('');
        jQuery('.feedback-screenshot').eq(0).html('<canvas></canvas>');
        jQuery('.feedback-body > div > h3').hide().siblings().show();
      } else {
        feedbackDialog.open();
      }
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
