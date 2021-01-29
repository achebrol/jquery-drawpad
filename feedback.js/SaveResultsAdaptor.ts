import { getSMSession } from './../cookie.service';
import { Send } from './Send';

export class SaveResultsAdapter extends Send {
  private config: any;
  constructor(config: any) {
    super();
    this.config = config;
  }
  send(data: any, callback: Function) {
    const smsession = getSMSession();
    data = { ...data[0], screen_shot: data[1] };
    $.ajax({
      url: this.config.url,
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
          surveyId: '60015dbce08d4f006815c1d3',
          archerId: this.config.archer_id,
          input: {
            result: data
          }
        }
      }),
      error: () => {
        callback(false);
      },
      success: (response) => {
        callback(true);
      }
    });
  }
}
