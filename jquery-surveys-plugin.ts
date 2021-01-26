import $ from 'jquery';
import { takeScreenshotJpegBlob } from './media-utilities';

import { SurveysService } from './surveys.service';

// Define the plugin function on the jQuery extension point.
// Note: Function and global default options must be combined as long as the options are mandatory.
$.fn.surveysPlugin = Object.assign<
  SurveysPluginFunction,
  SurveysPluginGlobalOptions
>(
  function (this: JQuery, options: SurveysPluginOptions): JQuery {
    // Merge the global options with the options given as argument.
    options = $.extend({}, $.fn.surveysPlugin.options, options);

    // Check if required options are missing.
    if (!options.archer_id) {
      console.error(
        'Plugin options are missing required parameter "archer_id": ',
        JSON.stringify(options)
      );
      return this;
    }

    // Do what the plugin should do. Here we create an instance of the separate service which is then used when the
    // user clicks the element that the plugin is attached to. It produces a greeting message and appends it to the output.
    let surveyservice = new SurveysService(options);
    surveyservice.initializeSurvey();
    let plugin: any;
    jQuery(`#${options.feedbackSource}`).on('click', () => {
      jQuery('.feedback-glass').show();
      jQuery('.feedback-modal').show();
      jQuery('.feedback-btn.close-btn').hide();
      jQuery('.feedback-btn.continue-btn').show();
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
      //canvas.toDataURL();
      jQuery('.feedback-include-screen').on('change', () => {
        if (jQuery('.feedback-include-screen').prop('checked')) {
          //1.Hide the modal
          //jQuery('.feedback-glass').hide();
          //jQuery('.feedback-modal').hide();
          //2.Grab the screenshot
          //3.Show the drawpad
          jQuery('.feedback-screenshot').drawpad();
          //4.Enlarge the modal window
          //jQuery('.feedback-modal').addClass('large');
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
    });
    // Return the jQuery object for chaining.
    return this;
  },
  // Define the global default options.
  {
    options: {
      outputSelector: null,
      allow_multiple: false,
      archer_id: '2340720',
      assetsUrl: 'https://aanpsadminui.z13.web.core.windows.net',
      mode: 'widget',
      survey_id: null,
      url: 'https://aa-nps-admin-gw-apim.azure-api.net/graphql',
      feedbackSource: null
    }
  }
);
