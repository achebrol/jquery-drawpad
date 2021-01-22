import $ from 'jquery';

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
      url: 'https://aa-nps-admin-gw.azurewebsites.net/graphql'
    }
  }
);
