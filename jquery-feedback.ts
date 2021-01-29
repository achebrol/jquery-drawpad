import { GLOBAL_OPTIONS } from './global-options';
import { Feedback } from './feedback.js/Core';
import { SaveResultsAdapter } from './feedback.js/SaveResultsAdaptor';
import {
  IsDisplayMediaSupported,
  takeScreenshotJpegBlob
} from './media-utilities';
import { SurveysService } from './surveys.service';

export class FeedbackPlugin {
  element: JQuery;
  options: FeedbackPluginOptions;
  surveyservice: SurveysService;
  plugin: any;
  feedbackDialog: Feedback;
  displayMediaSupported = false;
  constructor(element: JQuery, options: FeedbackPluginOptions) {
    this.element = element;
    this.options = $.extend(
      {},
      {
        url: GLOBAL_OPTIONS.url,
        assetsUrl: GLOBAL_OPTIONS.assetsUrl
      },
      options
    );
    this.initialize();
  }
  /*Private Methods */
  private initialize() {
    this.displayMediaSupported = IsDisplayMediaSupported();
    if (this.displayMediaSupported) {
      this.initializeMediaVersion();
    } else {
      this.initializeClassicVersion();
    }
  }
  private initializeMediaVersion() {
    this.surveyservice = new SurveysService({
      allow_multiple: false,
      archer_id: this.options.archer_id,
      url: this.options.url,
      assetsUrl: null,
      mode: '',
      survey_id: '',
      theme: '',
      css: null
    });
    $('.feedback-close').on('click', () => {
      $('.feedback-glass').hide();
      $('.feedback-modal').hide();
    });
    $('.feedback-btn.close-btn').on('click', () => {
      $('.feedback-glass').hide();
      $('.feedback-modal').hide();
    });

    $('.feedback-btn.continue-btn').on('click', async () => {
      const comments = $('.feedback-comments').eq(0).val() as string;
      if (comments.length == 0) {
        $('.feedback-comments').addClass('feedback-error');
        return;
      }
      var data = {
        comments: $('.feedback-comments').eq(0).val(),
        employee_name: $('.feedback-name').eq(0).val(),
        employee_email: $('.feedback-email').eq(0).val(),
        screen_shot: this.plugin.getBytes()
      };
      try {
        await this.surveyservice.postUserFeedback(data);
        $('.feedback-modal').removeClass('large');
        /*$('.feedback-body')
        .eq(0)
        .html(
          '<h3>Thank you for your feedback.we will contact you if we need more information</h3>'
        );*/
        $('.feedback-body > div > h3').show().siblings().hide();

        $('.feedback-btn').hide();
        $('.feedback-btn.close-btn').show();
      } catch (err) {
        console.log(err);
        alert('There was an error sending your feedback to the server.');
      }
    });
    $('.feedback-screenshot').on('click', async () => {
      $('.feedback-glass').hide();
      $('.feedback-modal').hide();
      var screenshotJpegBlob = await takeScreenshotJpegBlob();
      this.plugin = $('.feedback-canvas').show().drawpad({});
      this.plugin.setCaptureScreen(screenshotJpegBlob);
      $('.feedback-info').show().delay(5000).fadeOut();
    });
  }
  private initializeClassicVersion() {
    this.feedbackDialog = new Feedback({
      h2cPath: `${this.options.assetsUrl}/assets/html2canvas.js`,
      appendTo: null, // don't add feedback button to page
      adapter: new SaveResultsAdapter(this.options)
    });
  }
  /*Public Methods */
  public show() {
    if (this.displayMediaSupported) {
      $('.feedback-glass').show();
      $('.feedback-modal').show();
      $('.feedback-btn.close-btn').hide();
      $('.feedback-btn.continue-btn').show();
      $('.feedback-comments').eq(0).val('');
      $('.feedback-screenshot').eq(0).html('<canvas></canvas>');
      $('.feedback-body > div > h3').hide().siblings().show();
    } else {
      this.feedbackDialog.open();
    }
  }
}

(function ($: JQueryStatic) {
  const pluginSuffix = 'feedback';

  $.fn.feedback = function (options: FeedbackPluginOptions) {
    if ($(this).data(pluginSuffix) === undefined) {
      var plugin = new FeedbackPlugin(this, options);
      $(this).data(pluginSuffix, plugin);
    }
    return $(this).data(pluginSuffix);
  };
})(jQuery);
