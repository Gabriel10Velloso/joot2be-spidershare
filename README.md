## TÓPICOS -- https://github.com/topics/youtube-api?l=typescript

### @billfranklin Sorry, I mistook ng-update with https://www.npmjs.com/package/npm-check-updates.
### Yes, this is a bug. ng-update should update typescript to latest supported version.
### But I don't think it will be resolved soon: #11138 (comment).

### @dalu You can do:
### ng update --all --force
### and then
### npm i typescript@3.1.6 (or even better: npm i typescript@"<3.2")




# Youtube Api Gerando chave
## https://www.youtube.com/watch?v=3jZ5vnv-LZc
### https://console.cloud.google.com/?pli=1

## DELETE PROJECT 
## https://www.youtube.com/watch?v=fv_Luo2V6OE
## https://www.youtube.com/watch?v=DETrbAYf2EE
````

````



# Validando angular-captcha - pra evitar boot
### stackbliz google image captcha
### https://netbasal.com/how-to-integrate-recaptcha-in-your-angular-forms-400c43344d5c
### https://www.youtube.com/watch?v=zGNH_lbpmm8
### https://www.youtube.com/watch?v=9z4CI91AVlQ
### https://w3path.com/how-to-integrate-recaptcha-in-angular-8/
### https://www.npmjs.com/package/ng2-google-recaptcha/v/4.0.0
### Integrate Google's Invisible reCAPTCHA (3 Simple Steps)



````
if (this.clock >= '12:00am' && this.clock <= '12:59am') {
      this.API_KEY = YOUTUBE_API_KEY;
    }

    if (this.clock >= '1:00am' && this.clock <= '1:59am') {
      this.API_KEY = YOUTUBE_API_KEY1;
    }

    if (this.clock >= '2:00am' && this.clock <= '2:59am') {
      this.API_KEY = YOUTUBE_API_KEY2;
    }

    if (this.clock >= '3:00am' && this.clock <= '3:59am') {
      this.API_KEY = YOUTUBE_API_KEY3;
    }

    if (this.clock >= '4:00am' && this.clock <= '4:59am') {
      this.API_KEY = YOUTUBE_API_KEY4;
    }

    if (this.clock >= '5:00am' && this.clock <= '5:59am') {
      this.API_KEY = YOUTUBE_API_KEY5;
    }

    if (this.clock >= '6:00am' && this.clock <= '6:59am') {
      this.API_KEY = YOUTUBE_API_KEY6;
    }

    if (this.clock >= '7:00am' && this.clock <= '7:59am') {
      this.API_KEY = YOUTUBE_API_KEY7;
    }

    if (this.clock >= '8:00am' && this.clock <= '8:59am') {
      this.API_KEY = YOUTUBE_API_KEY8;
    }

    if (this.clock >= '9:00am' && this.clock <= '9:59am') {
      this.API_KEY = YOUTUBE_API_KEY9;
    }

    if (this.clock >= '10:00am' && this.clock <= '10:59am') {
      this.API_KEY = YOUTUBE_API_KEY10;
    }

    if (this.clock >= '11:00am' && this.clock <= '11:59am') {
      this.API_KEY = YOUTUBE_API_KEY11;
    }

    if (this.clock >= '12:00pm' && this.clock <= '12:59pm') {
      this.API_KEY = YOUTUBE_API_KEY12;
    }

    if (this.clock >= '1:00pm' && this.clock <= '1:59pm') {
      this.API_KEY = YOUTUBE_API_KEY13;
    }
    if (this.clock >= '2:00pm' && this.clock <= '2:59pm') {
      this.API_KEY = YOUTUBE_API_KEY14;
    }
    
    if (this.clock >= '3:00pm' && this.clock <= '3:59pm') {
      this.API_KEY = YOUTUBE_API_KEY15;
    }

    if (this.clock >= '4:00pm' && this.clock <= '4:59pm') {
      this.API_KEY = YOUTUBE_API_KEY16;
    }

    if (this.clock >= '5:00pm' && this.clock <= '5:59pm') {
      this.API_KEY = YOUTUBE_API_KEY17;
    }

    if (this.clock >= '6:00pm' && this.clock <= '6:59pm') {
      this.API_KEY = YOUTUBE_API_KEY18;
    }

    if (this.clock >= '7:00pm' && this.clock <= '7:59pm') {
      this.API_KEY = YOUTUBE_API_KEY19;
    }

    if (this.clock >= '8:00pm' && this.clock <= '8:59pm') {
      this.API_KEY = YOUTUBE_API_KEY20;
    }

    if (this.clock >= '9:00pm' && this.clock <= '9:59pm') {
      this.API_KEY = YOUTUBE_API_KEY21;
    }
    if (this.clock >= '10:00pm' && this.clock <= '10:59pm') {
      this.API_KEY = YOUTUBE_API_KEY22;
    }
    if (this.clock >= '11:00pm' && this.clock <= '11:59pm') {
      this.API_KEY = YOUTUBE_API_KEY23;
    }
    // if (this.clock == '12PM') {
    //   this.API_KEY = YOUTUBE_API_KEY24;
    // }

    console.log(this.clock);
    // console.log('Ty1J2dL'+this.API_KEY+'X1aLSePm');
  }

````




# SERVIÇO HORARIO 1

````
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { NotificationService } from './notification.service';
import * as moment from 'moment';

import { YOUTUBE_API_KEY } from '../constants';
import { YOUTUBE_API_KEY1 } from '../constants';
import { YOUTUBE_API_KEY2 } from '../constants';
import { YOUTUBE_API_KEY3 } from '../constants';
import { YOUTUBE_API_KEY4 } from '../constants';
import { YOUTUBE_API_KEY5 } from '../constants';
import { YOUTUBE_API_KEY6 } from '../constants';
import { YOUTUBE_API_KEY7 } from '../constants';
import { YOUTUBE_API_KEY8 } from '../constants';
import { YOUTUBE_API_KEY9 } from '../constants';
import { YOUTUBE_API_KEY10 } from '../constants';
import { YOUTUBE_API_KEY11 } from '../constants';
import { YOUTUBE_API_KEY12 } from '../constants';
import { YOUTUBE_API_KEY13 } from '../constants';
import { YOUTUBE_API_KEY14 } from '../constants';
import { YOUTUBE_API_KEY15 } from '../constants';
import { YOUTUBE_API_KEY16 } from '../constants';
import { YOUTUBE_API_KEY17 } from '../constants';
import { YOUTUBE_API_KEY18 } from '../constants';
import { YOUTUBE_API_KEY19 } from '../constants';
import { YOUTUBE_API_KEY20 } from '../constants';
import { YOUTUBE_API_KEY21 } from '../constants';
import { YOUTUBE_API_KEY22 } from '../constants';
import { YOUTUBE_API_KEY23 } from '../constants';
import { YOUTUBE_API_KEY24 } from '../constants';
import { YOUTUBE_API_KEY25 } from '../constants';
import { YOUTUBE_API_KEY26 } from '../constants';
import { YOUTUBE_API_KEY27 } from '../constants';
import { YOUTUBE_API_KEY28 } from '../constants';
import { YOUTUBE_API_KEY29 } from '../constants';
import { YOUTUBE_API_KEY30 } from '../constants';
import { YOUTUBE_API_KEY31 } from '../constants';
import { YOUTUBE_API_KEY32 } from '../constants';
import { YOUTUBE_API_KEY33} from '../constants';
import { YOUTUBE_API_KEY34 } from '../constants';
import { YOUTUBE_API_KEY35 } from '../constants';
import { YOUTUBE_API_KEY36 } from '../constants';
import { YOUTUBE_API_KEY37 } from '../constants';
import { YOUTUBE_API_KEY38 } from '../constants';
import { YOUTUBE_API_KEY39 } from '../constants';
import { YOUTUBE_API_KEY40 } from '../constants';
import { YOUTUBE_API_KEY41 } from '../constants';
import { YOUTUBE_API_KEY42 } from '../constants';
import { YOUTUBE_API_KEY43 } from '../constants';
import { YOUTUBE_API_KEY44 } from '../constants';
import { YOUTUBE_API_KEY45 } from '../constants';
import { YOUTUBE_API_KEY46} from '../constants';
import { YOUTUBE_API_KEY47 } from '../constants';

@Injectable()
export class YoutubeApiService {
  // base_url = 'https://www.googleapis.com/youtube/v3/';
  private base_url: string = environment.apiURL + '';

  max_results = 50;

  public nextToken: string;
  public lastQuery: string;
  clock = '';
  clockHandle;
  API_KEY;
  clock2 = '';

  constructor(
    private http: Http,
    private notificationService: NotificationService
  ) { 
    this.getTime();
  }


  getTime() {
    // this.clockHandle = setInterval(() => {
    // moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    this.clock = moment().format("h:mm:ssa");
    this.clock2 = moment().format("hA");

    if (this.clock >= '12:00:00' && this.clock <= '12:29:59' && this.clock2 == '12AM') {
      this.API_KEY = YOUTUBE_API_KEY;
    }

    if (this.clock >= '12:30:00' && this.clock <= '12:59:59' && this.clock2 == '12AM') {
      this.API_KEY = YOUTUBE_API_KEY1;
    }

    if (this.clock >= '1:00:00' && this.clock <= '1:29:59' && this.clock2 == '1AM') {
      this.API_KEY = YOUTUBE_API_KEY2;
    }

    if (this.clock >= '1:30:00' && this.clock <= '1:59:59' && this.clock2 == '1AM') {
      this.API_KEY = YOUTUBE_API_KEY3;
    }

    if (this.clock >= '2:00:00' && this.clock <= '2:29:59' && this.clock2 == '2AM') {
      this.API_KEY = YOUTUBE_API_KEY4;
    }

    if (this.clock >= '2:30:00' && this.clock <= '2:59:59' && this.clock2 == '2AM') {
      this.API_KEY = YOUTUBE_API_KEY5;
    }

    if (this.clock >= '3:00' && this.clock <= '3:29:59' && this.clock2 == '3AM') {
      this.API_KEY = YOUTUBE_API_KEY6;
    }

    if (this.clock >= '3:30:00' && this.clock <= '3:59:59' && this.clock2 == '3AM') {
      this.API_KEY = YOUTUBE_API_KEY7;
    }

    if (this.clock >= '4:00:00' && this.clock <= '4:29:59' && this.clock2 == '4AM') {
      this.API_KEY = YOUTUBE_API_KEY8;
    }

    if (this.clock >= '4:30:00' && this.clock <= '4:59:59' && this.clock2 == '4AM') {
      this.API_KEY = YOUTUBE_API_KEY9;
    }

    if (this.clock >= '5:00:00' && this.clock <= '5:29:59' && this.clock2 == '5AM') {
      this.API_KEY = YOUTUBE_API_KEY10;
    }

    if (this.clock >= '5:30:00' && this.clock <= '5:59:59' && this.clock2 == '5AM') {
      this.API_KEY = YOUTUBE_API_KEY11;
    }

    if (this.clock >= '6:00:00' && this.clock <= '6:29:59' && this.clock2 == '6AM') {
      this.API_KEY = YOUTUBE_API_KEY12;
    }

    if (this.clock >= '6:30:00' && this.clock <= '6:59:59' && this.clock2 == '6AM') {
      this.API_KEY = YOUTUBE_API_KEY13;
    }

    if (this.clock >= '7:00:00' && this.clock <= '7:29:59' && this.clock2 == '7AM') {
      this.API_KEY = YOUTUBE_API_KEY14;
    }

    if (this.clock >= '7:30:00' && this.clock <= '7:59:59' && this.clock2 == '7AM') {
      this.API_KEY = YOUTUBE_API_KEY15;
    }

    if (this.clock >= '8:00:00' && this.clock <= '8:29:59' && this.clock2 == '8AM') {
      this.API_KEY = YOUTUBE_API_KEY16;
    }

    if (this.clock >= '8:30:00' && this.clock <= '8:59:59' && this.clock2 == '8AM') {
      this.API_KEY = YOUTUBE_API_KEY17;
    }

    if (this.clock >= '9:00:00' && this.clock <= '9:29:59' && this.clock2 == '9AM') {
      this.API_KEY = YOUTUBE_API_KEY18;
    }

    if (this.clock >= '9:30:00' && this.clock <= '9:59:59' && this.clock2 == '9AM') {
      this.API_KEY = YOUTUBE_API_KEY19;
    }

    if (this.clock >= '10:00:00' && this.clock <= '10:29:59' && this.clock2 == '10AM') {
      this.API_KEY = YOUTUBE_API_KEY20;
    }

    if (this.clock >= '10:30:00' && this.clock <= '10:59:59' && this.clock2 == '10AM') {
      this.API_KEY = YOUTUBE_API_KEY21;
    }

    if (this.clock >= '11:00:00' && this.clock <= '11:29:59' && this.clock2 == '11AM') {
      this.API_KEY = YOUTUBE_API_KEY22;
    }

    if (this.clock >= '11:30:00' && this.clock <= '11:59:59' && this.clock2 == '11AM') {
      this.API_KEY = YOUTUBE_API_KEY23;
    }

    if (this.clock >= '12:00:00' && this.clock <= '12:29:59' && this.clock2 == '12PM') {
      this.API_KEY = YOUTUBE_API_KEY24;
    }
    if (this.clock >= '12:30:00' && this.clock <= '12:59:59' && this.clock2 == '12PM') {
      this.API_KEY = YOUTUBE_API_KEY25;
    }

    if (this.clock >= '1:00:00' && this.clock <= '1:29:59' && this.clock2 == '1PM') {
      this.API_KEY = YOUTUBE_API_KEY26;
    }

    if (this.clock >= '1:30:00' && this.clock <= '1:59:59' && this.clock2 == '1PM') {
      this.API_KEY = YOUTUBE_API_KEY27;
    }

    if (this.clock >= '2:00:00' && this.clock <= '2:29:59' && this.clock2 == '2PM') {
      this.API_KEY = YOUTUBE_API_KEY28;
    }

    if (this.clock >= '2:30:00' && this.clock <= '2:59:59' && this.clock2 == '2PM') {
      this.API_KEY = YOUTUBE_API_KEY29;
    }

    if (this.clock >= '3:00:00' && this.clock <= '3:29:59' && this.clock2 == '3PM') {
      this.API_KEY = YOUTUBE_API_KEY30;
    }

    if (this.clock >= '3:30:00' && this.clock <= '3:59:59' && this.clock2 == '3PM') {
      this.API_KEY = YOUTUBE_API_KEY31;
    }

    if (this.clock >= '4:00:00' && this.clock <= '4:29:59' && this.clock2 == '4PM') {
      this.API_KEY = YOUTUBE_API_KEY32;
    }

    if (this.clock >= '4:30:00' && this.clock <= '4:59:59' && this.clock2 == '4PM') {
      this.API_KEY = YOUTUBE_API_KEY33;
    }

    if (this.clock >= '5:00:00' && this.clock <= '5:29:59' && this.clock2 == '5PM') {
      this.API_KEY = YOUTUBE_API_KEY34;
    }

    if (this.clock >= '5:30:00' && this.clock <= '5:59:59' && this.clock2 == '5PM') {
      this.API_KEY = YOUTUBE_API_KEY35;
    }

    if (this.clock >= '6:00:00' && this.clock <= '6:29:59' && this.clock2 == '6PM') {
      this.API_KEY = YOUTUBE_API_KEY36;
    }

    if (this.clock >= '6:30:00' && this.clock <= '6:59:59' && this.clock2 == '6PM') {
      this.API_KEY = YOUTUBE_API_KEY37;
    }

    if (this.clock >= '7:00:00' && this.clock <= '7:29:59' && this.clock2 == '7PM') {
      this.API_KEY = YOUTUBE_API_KEY38;
    }

    if (this.clock >= '7:30:00' && this.clock <= '7:59:59' && this.clock2 == '7PM') {
      this.API_KEY = YOUTUBE_API_KEY39;
    }

    if (this.clock >= '8:00:00' && this.clock <= '8:29:59' && this.clock2 == '8PM') {
      this.API_KEY = YOUTUBE_API_KEY40;
    }

    if (this.clock >= '8:30:00' && this.clock <= '8:59:59' && this.clock2 == '8PM') {
      this.API_KEY = YOUTUBE_API_KEY41;
    }

    if (this.clock >= '9:00:00' && this.clock <= '9:29:59' && this.clock2 == '9PM') {
      this.API_KEY = YOUTUBE_API_KEY42;
    }

    if (this.clock >= '9:30:00' && this.clock <= '9:59:59' && this.clock2 == '9PM') {
      this.API_KEY = YOUTUBE_API_KEY43;
    }

    if (this.clock >= '10:00:00' && this.clock <= '10:29:59' && this.clock2 == '10PM') {
      this.API_KEY = YOUTUBE_API_KEY44;
    }

    if (this.clock >= '10:30:00' && this.clock <= '10:59:59' && this.clock2 == '10PM') {
      this.API_KEY = YOUTUBE_API_KEY45;
    }

    if (this.clock >= '11:00:00' && this.clock <= '11:29:59' && this.clock2 == '11PM') {
      this.API_KEY = YOUTUBE_API_KEY46;
    }

    if (this.clock >= '11:30:00' && this.clock <= '11:59:59' && this.clock2 == '11PM') {
      this.API_KEY = YOUTUBE_API_KEY47;
    }


    // console.log('Ty1J2dL'+this.API_KEY+'X1aLSe');


    // console.log(this.clock);
    // console.log(this.clock2);

  }

  searchVideos(query: string): Promise<any> {
    const url = `${this.base_url}search?q=${query}&maxResults=${this.max_results}&type=video&part=snippet,id&key=${YOUTUBE_API_KEY}&videoEmbeddable=true`; // tslint:disable-line

    return this.http.get(url)
      .map(response => {
        let jsonRes = response.json();
        let res = jsonRes['items'];
        this.lastQuery = query;
        this.nextToken = jsonRes['nextPageToken'] ? jsonRes['nextPageToken'] : undefined;

        let ids = [];

        res.forEach((item) => {
          ids.push(item.id.videoId);
        });

        return this.getVideos(ids);
      })
      .toPromise()
      .catch(this.handleError)
  }

  searchNext(): Promise<any> {
    const url = `${this.base_url}search?q=${this.lastQuery}&pageToken=${this.nextToken}&maxResults=${this.max_results}&type=video&part=snippet,id&key=${YOUTUBE_API_KEY}&videoEmbeddable=true`; // tslint:disable-line

    return this.http.get(url)
      .map(response => {
        let jsonRes = response.json();
        let res = jsonRes['items'];
        this.nextToken = jsonRes['nextPageToken'] ? jsonRes['nextPageToken'] : undefined;
        let ids = [];

        res.forEach((item) => {
          ids.push(item.id.videoId);
        });

        return this.getVideos(ids);
      })
      .toPromise()
      .catch(this.handleError)
  }

  getVideos(ids): Promise<any> {
    const url = `${this.base_url}videos?id=${ids.join(',')}&maxResults=${this.max_results}&type=video&part=snippet,contentDetails,statistics&key=${YOUTUBE_API_KEY}`; // tslint:disable-line

    return this.http.get(url)
      .map(results => {
        return results.json()['items'];
      })
      .toPromise()
      .catch(this.handleError)
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    this.notificationService.showNotification(errMsg);
    return Promise.reject(errMsg);
  }
}

````


# SERVIÇO HORARIO 2
````
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { NotificationService } from './notification.service';
import * as moment from 'moment';

import { YOUTUBE_API_KEY } from '../constants';
import { YOUTUBE_API_KEY1 } from '../constants';
import { YOUTUBE_API_KEY2 } from '../constants';
import { YOUTUBE_API_KEY3 } from '../constants';
import { YOUTUBE_API_KEY4 } from '../constants';
import { YOUTUBE_API_KEY5 } from '../constants';
import { YOUTUBE_API_KEY6 } from '../constants';
import { YOUTUBE_API_KEY7 } from '../constants';
import { YOUTUBE_API_KEY8 } from '../constants';
import { YOUTUBE_API_KEY9 } from '../constants';
import { YOUTUBE_API_KEY10 } from '../constants';
import { YOUTUBE_API_KEY11 } from '../constants';
import { YOUTUBE_API_KEY12 } from '../constants';
import { YOUTUBE_API_KEY13 } from '../constants';
import { YOUTUBE_API_KEY14 } from '../constants';
import { YOUTUBE_API_KEY15 } from '../constants';
import { YOUTUBE_API_KEY16 } from '../constants';
import { YOUTUBE_API_KEY17 } from '../constants';
import { YOUTUBE_API_KEY18 } from '../constants';
import { YOUTUBE_API_KEY19 } from '../constants';
import { YOUTUBE_API_KEY20 } from '../constants';
import { YOUTUBE_API_KEY21 } from '../constants';
import { YOUTUBE_API_KEY22 } from '../constants';
import { YOUTUBE_API_KEY23 } from '../constants';
import { YOUTUBE_API_KEY24 } from '../constants';
import { YOUTUBE_API_KEY25 } from '../constants';
import { YOUTUBE_API_KEY26 } from '../constants';
import { YOUTUBE_API_KEY27 } from '../constants';
import { YOUTUBE_API_KEY28 } from '../constants';
import { YOUTUBE_API_KEY29 } from '../constants';
import { YOUTUBE_API_KEY30 } from '../constants';
import { YOUTUBE_API_KEY31 } from '../constants';
import { YOUTUBE_API_KEY32 } from '../constants';
import { YOUTUBE_API_KEY33} from '../constants';
import { YOUTUBE_API_KEY34 } from '../constants';
import { YOUTUBE_API_KEY35 } from '../constants';
import { YOUTUBE_API_KEY36 } from '../constants';
import { YOUTUBE_API_KEY37 } from '../constants';
import { YOUTUBE_API_KEY38 } from '../constants';
import { YOUTUBE_API_KEY39 } from '../constants';
import { YOUTUBE_API_KEY40 } from '../constants';
import { YOUTUBE_API_KEY41 } from '../constants';
import { YOUTUBE_API_KEY42 } from '../constants';
import { YOUTUBE_API_KEY43 } from '../constants';
import { YOUTUBE_API_KEY44 } from '../constants';
import { YOUTUBE_API_KEY45 } from '../constants';
import { YOUTUBE_API_KEY46} from '../constants';
import { YOUTUBE_API_KEY47 } from '../constants';

@Injectable()
export class YoutubeApiService {
  // base_url = 'https://www.googleapis.com/youtube/v3/';
  private base_url: string = environment.apiURL + '';

  max_results = 50;

  public nextToken: string;
  public lastQuery: string;
  clock = '';
  clockHandle;
  API_KEY;
  clock2 = '';

  constructor(
    private http: Http,
    private notificationService: NotificationService
  ) { 
    this.getTime();
  }


  getTime() {
    // this.clockHandle = setInterval(() => {
    // moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    this.clock = moment().format("h:mm:ssa");
    this.clock2 = moment().format("hA");

    if (this.clock >= '12:00:00' && this.clock <= '12:29:59' && this.clock2 == '12AM') {
      this.API_KEY = YOUTUBE_API_KEY24;
    }

    if (this.clock >= '12:30:00' && this.clock <= '12:59:59' && this.clock2 == '12AM') {
       this.API_KEY = YOUTUBE_API_KEY25;
    }

    if (this.clock >= '1:00:00' && this.clock <= '1:29:59' && this.clock2 == '1AM') {
      this.API_KEY = YOUTUBE_API_KEY26;
    }

    if (this.clock >= '1:30:00' && this.clock <= '1:59:59' && this.clock2 == '1AM') {
      this.API_KEY = YOUTUBE_API_KEY27;
    }

    if (this.clock >= '2:00:00' && this.clock <= '2:29:59' && this.clock2 == '2AM') {
      this.API_KEY = YOUTUBE_API_KEY28;
    }

    if (this.clock >= '2:30:00' && this.clock <= '2:59:59' && this.clock2 == '2AM') {
      this.API_KEY = YOUTUBE_API_KEY29;
    }

    if (this.clock >= '3:00' && this.clock <= '3:29:59' && this.clock2 == '3AM') {
      this.API_KEY = YOUTUBE_API_KEY30;
    }

    if (this.clock >= '3:30:00' && this.clock <= '3:59:59' && this.clock2 == '3AM') {
      this.API_KEY = YOUTUBE_API_KEY31;
    }

    if (this.clock >= '4:00:00' && this.clock <= '4:29:59' && this.clock2 == '4AM') {
      this.API_KEY = YOUTUBE_API_KEY32;
    }

    if (this.clock >= '4:30:00' && this.clock <= '4:59:59' && this.clock2 == '4AM') {
      this.API_KEY = YOUTUBE_API_KEY33;
    }

    if (this.clock >= '5:00:00' && this.clock <= '5:29:59' && this.clock2 == '5AM') {
      this.API_KEY = YOUTUBE_API_KEY34;
    }

    if (this.clock >= '5:30:00' && this.clock <= '5:59:59' && this.clock2 == '5AM') {
      this.API_KEY = YOUTUBE_API_KEY35;
    }

    if (this.clock >= '6:00:00' && this.clock <= '6:29:59' && this.clock2 == '6AM') {
      this.API_KEY = YOUTUBE_API_KEY36;
    }

    if (this.clock >= '6:30:00' && this.clock <= '6:59:59' && this.clock2 == '6AM') {
      this.API_KEY = YOUTUBE_API_KEY37;
    }

    if (this.clock >= '7:00:00' && this.clock <= '7:29:59' && this.clock2 == '7AM') {
      this.API_KEY = YOUTUBE_API_KEY38;
    }

    if (this.clock >= '7:30:00' && this.clock <= '7:59:59' && this.clock2 == '7AM') {
      this.API_KEY = YOUTUBE_API_KEY39;
    }

    if (this.clock >= '8:00:00' && this.clock <= '8:29:59' && this.clock2 == '8AM') {
      this.API_KEY = YOUTUBE_API_KEY40;
    }

    if (this.clock >= '8:30:00' && this.clock <= '8:59:59' && this.clock2 == '8AM') {
      this.API_KEY = YOUTUBE_API_KEY41;
    }

    if (this.clock >= '9:00:00' && this.clock <= '9:29:59' && this.clock2 == '9AM') {
      this.API_KEY = YOUTUBE_API_KEY42;
    }

    if (this.clock >= '9:30:00' && this.clock <= '9:59:59' && this.clock2 == '9AM') {
      this.API_KEY = YOUTUBE_API_KEY43;
    }

    if (this.clock >= '10:00:00' && this.clock <= '10:29:59' && this.clock2 == '10AM') {
      this.API_KEY = YOUTUBE_API_KEY44;
    }

    if (this.clock >= '10:30:00' && this.clock <= '10:59:59' && this.clock2 == '10AM') {
      this.API_KEY = YOUTUBE_API_KEY45;
    }

    if (this.clock >= '11:00:00' && this.clock <= '11:29:59' && this.clock2 == '11AM') {
      this.API_KEY = YOUTUBE_API_KEY46;
    }

    if (this.clock >= '11:30:00' && this.clock <= '11:59:59' && this.clock2 == '11AM') {
      this.API_KEY = YOUTUBE_API_KEY47;
    }

    if (this.clock >= '12:00:00' && this.clock <= '12:29:59' && this.clock2 == '12PM') {
      this.API_KEY = YOUTUBE_API_KEY;
    }
    if (this.clock >= '12:30:00' && this.clock <= '12:59:59' && this.clock2 == '12PM') {
      this.API_KEY = YOUTUBE_API_KEY1;
    }

    if (this.clock >= '1:00:00' && this.clock <= '1:29:59' && this.clock2 == '1PM') {
      this.API_KEY = YOUTUBE_API_KEY2;
    }

    if (this.clock >= '1:30:00' && this.clock <= '1:59:59' && this.clock2 == '1PM') {
      this.API_KEY = YOUTUBE_API_KEY3;
    }

    if (this.clock >= '2:00:00' && this.clock <= '2:29:59' && this.clock2 == '2PM') {
      this.API_KEY = YOUTUBE_API_KEY4;
    }

    if (this.clock >= '2:30:00' && this.clock <= '2:59:59' && this.clock2 == '2PM') {
      this.API_KEY = YOUTUBE_API_KEY5;
    }

    if (this.clock >= '3:00:00' && this.clock <= '3:29:59' && this.clock2 == '3PM') {
      this.API_KEY = YOUTUBE_API_KEY6;
    }

    if (this.clock >= '3:30:00' && this.clock <= '3:59:59' && this.clock2 == '3PM') {
      this.API_KEY = YOUTUBE_API_KEY7;
    }

    if (this.clock >= '4:00:00' && this.clock <= '4:29:59' && this.clock2 == '4PM') {
      this.API_KEY = YOUTUBE_API_KEY8;
    }

    if (this.clock >= '4:30:00' && this.clock <= '4:59:59' && this.clock2 == '4PM') {
      this.API_KEY = YOUTUBE_API_KEY9;
    }

    if (this.clock >= '5:00:00' && this.clock <= '5:29:59' && this.clock2 == '5PM') {
      this.API_KEY = YOUTUBE_API_KEY10;
    }

    if (this.clock >= '5:30:00' && this.clock <= '5:59:59' && this.clock2 == '5PM') {
      this.API_KEY = YOUTUBE_API_KEY11;
    }

    if (this.clock >= '6:00:00' && this.clock <= '6:29:59' && this.clock2 == '6PM') {
      this.API_KEY = YOUTUBE_API_KEY12;
    }

    if (this.clock >= '6:30:00' && this.clock <= '6:59:59' && this.clock2 == '6PM') {
      this.API_KEY = YOUTUBE_API_KEY13;
    }

    if (this.clock >= '7:00:00' && this.clock <= '7:29:59' && this.clock2 == '7PM') {
      this.API_KEY = YOUTUBE_API_KEY14;
    }

    if (this.clock >= '7:30:00' && this.clock <= '7:59:59' && this.clock2 == '7PM') {
      this.API_KEY = YOUTUBE_API_KEY15;
    }

    if (this.clock >= '8:00:00' && this.clock <= '8:29:59' && this.clock2 == '8PM') {
      this.API_KEY = YOUTUBE_API_KEY16;
    }

    if (this.clock >= '8:30:00' && this.clock <= '8:59:59' && this.clock2 == '8PM') {
      this.API_KEY = YOUTUBE_API_KEY17;
    }

    if (this.clock >= '9:00:00' && this.clock <= '9:29:59' && this.clock2 == '9PM') {
      this.API_KEY = YOUTUBE_API_KEY18;
    }

    if (this.clock >= '9:30:00' && this.clock <= '9:59:59' && this.clock2 == '9PM') {
      this.API_KEY = YOUTUBE_API_KEY19;
    }

    if (this.clock >= '10:00:00' && this.clock <= '10:29:59' && this.clock2 == '10PM') {
      this.API_KEY = YOUTUBE_API_KEY20;
    }

    if (this.clock >= '10:30:00' && this.clock <= '10:59:59' && this.clock2 == '10PM') {
      this.API_KEY = YOUTUBE_API_KEY21;
    }

    if (this.clock >= '11:00:00' && this.clock <= '11:29:59' && this.clock2 == '11PM') {
      this.API_KEY = YOUTUBE_API_KEY22;
    }

    if (this.clock >= '11:30:00' && this.clock <= '11:59:59' && this.clock2 == '11PM') {
      this.API_KEY = YOUTUBE_API_KEY23;
    }


    // console.log('Ty1J2dL'+this.API_KEY+'X1aLSe');


    // console.log(this.clock);
    // console.log(this.clock2);

  }

  searchVideos(query: string): Promise<any> {
    const url = `${this.base_url}search?q=${query}&maxResults=${this.max_results}&type=video&part=snippet,id&key=${YOUTUBE_API_KEY}&videoEmbeddable=true`; // tslint:disable-line

    return this.http.get(url)
      .map(response => {
        let jsonRes = response.json();
        let res = jsonRes['items'];
        this.lastQuery = query;
        this.nextToken = jsonRes['nextPageToken'] ? jsonRes['nextPageToken'] : undefined;

        let ids = [];

        res.forEach((item) => {
          ids.push(item.id.videoId);
        });

        return this.getVideos(ids);
      })
      .toPromise()
      .catch(this.handleError)
  }

  searchNext(): Promise<any> {
    const url = `${this.base_url}search?q=${this.lastQuery}&pageToken=${this.nextToken}&maxResults=${this.max_results}&type=video&part=snippet,id&key=${YOUTUBE_API_KEY}&videoEmbeddable=true`; // tslint:disable-line

    return this.http.get(url)
      .map(response => {
        let jsonRes = response.json();
        let res = jsonRes['items'];
        this.nextToken = jsonRes['nextPageToken'] ? jsonRes['nextPageToken'] : undefined;
        let ids = [];

        res.forEach((item) => {
          ids.push(item.id.videoId);
        });

        return this.getVideos(ids);
      })
      .toPromise()
      .catch(this.handleError)
  }

  getVideos(ids): Promise<any> {
    const url = `${this.base_url}videos?id=${ids.join(',')}&maxResults=${this.max_results}&type=video&part=snippet,contentDetails,statistics&key=${YOUTUBE_API_KEY}`; // tslint:disable-line

    return this.http.get(url)
      .map(results => {
        return results.json()['items'];
      })
      .toPromise()
      .catch(this.handleError)
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    this.notificationService.showNotification(errMsg);
    return Promise.reject(errMsg);
  }
}

````