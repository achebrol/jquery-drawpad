import { CookieService } from './cookie.service';
import html from './survey.html';

import './survey.css';
import * as Survey from 'survey-jquery';
export class SurveysService {
  private options: SurveysPluginOptions;
  private aa_survey: Survey.Survey;
  constructor(options: SurveysPluginOptions) {
    this.options = options;
  }
  async initializeSurvey() {
    var survey = await this.getActiveSurvey();
    if (!survey) {
      return;
    }
    let { results, surveyJsOptions } = await this.renderSurvey(survey);
    await this.postSurveyResults(results, surveyJsOptions);
  }
  private getActiveSurvey(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      $.ajax({
        url: this.options.url,
        contentType: 'application/json',
        type: 'POST',
        data: JSON.stringify({
          query: this.options.survey_id
            ? `query Query($surveyId: String) 
                            { activeSurvey(surveyId: $surveyId) 
                                { 
                                  surveyId
                                  activationWindowId
                                  definition 
                                } 
                            }
                        `
            : `query Query($archerId: String) 
                        { activeSurvey(archerId: $archerId) 
                            { 
                              surveyId
                              activationWindowId
                              definition 
                            } 
                        }
                    `,
          variables: this.options.survey_id
            ? {
                surveyId: this.options.survey_id
              }
            : {
                archerId: this.options.archer_id
              }
        }),
        success: (json) => {
          var surveyJSON = json.data.activeSurvey || {};
          resolve(surveyJSON);
        },
        error: (err) => {
          reject(err);
        }
      });
    });
  }
  private postSurveyResults(
    survey: any,
    surveyJsOptions: any
  ): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const cookieService = new CookieService();
      const smsession = cookieService.getSMSession();
      $.ajax({
        url: this.options.url,
        contentType: 'application/json',
        headers: { SMSESSION: smsession },
        type: 'POST',
        data: JSON.stringify({
          query: `mutation CreateSurveyResultMutation($surveyId: String!,$archerId: String!, $input: SurveyResultInput!) 
                    {  createSurveyResult(
                        surveyId: $surveyId, 
                        archerId: $archerId,
                        input: $input
                        )
                    }
                `,
          variables: {
            surveyId: this.options.survey_id,
            archerId: this.options.archer_id,
            input: {
              result: survey.data
            }
          }
        }),
        error: () => {
          survey.deleteCookie();
          surveyJsOptions.showDataSavingError();
        },
        success: (response) => {
          if (!response.data?.createSurveyResult) {
            survey.deleteCookie();
            surveyJsOptions.showDataSavingError();
          }
          resolve(response.data.createSurveyResult as boolean);
        }
      });
    });
  }
  private renderSurvey(surveyJSON: any) {
    return new Promise<{ results: any; surveyJsOptions: any }>(
      (resolve, reject) => {
        let temporary = document.createElement('div');
        temporary.innerHTML = html;

        let body = document.getElementsByTagName('body')[0];
        body.appendChild(temporary);
        var surveyDefinition = surveyJSON.definition || {};
        if (!surveyJSON.surveyId) {
          console.log('No Active survey at the moment');
          if (this.options.mode === 'inline') {
            window.close();
          }
          return;
        }
        this.options.survey_id = surveyJSON.surveyId;
        //TODO:Find a better way
        if (this.options.allow_multiple !== true) {
          surveyDefinition.cookieName = surveyJSON.activationWindowId;
        }
        Survey.StylesManager.applyTheme('bootstrap');
        Survey.defaultBootstrapCss.navigationButton = 'btn btn-success';
        Survey.surveyStrings.emptySurvey =
          'There is no survey active at the moment.';
        //config.title || surveyDefinition.title || 'Feedback?';
        surveyDefinition.title = 'Feedback?';
        this.aa_survey = new Survey.Model(surveyDefinition);

        if (
          this.aa_survey.state == 'completed' &&
          this.options.allow_multiple !== true
        ) {
          return;
        }
        // survey.css = myCss;
        // append elements to body

        if (this.options.mode === 'inline') {
          $('#aa_nps_surveyContainer').Survey({
            model: this.aa_survey,
            onComplete: (results: any, surveyJsOptions: any) => {
              resolve({ results, surveyJsOptions });
            }
          });
        } else {
          $('#aa_nps_surveyContainer').SurveyWindow({
            model: this.aa_survey,
            isExpanded: true,
            closeOnCompleteTimeout: 2,
            onComplete: (results: any, surveyJsOptions: any) => {
              resolve({ results, surveyJsOptions });
            }
          });
        }
      }
    );
  }
}
