import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-oscp',
  templateUrl: './oscp.component.html',
  styleUrls: ['./oscp.component.css']
})
export class OscpComponent implements OnInit {

  public iframeUrl = 'https://tesg-oscp.s3.amazonaws.com/index.html#/jobs';

  constructor(private route: ActivatedRoute, public domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      let utmSource = params.get('utm_source');
      let utmMedium = params.get('utm_medium');
      let utmCampaign = params.get('utm_campaign');
      let jobId = params.get('job');
      let paramsArr = [{
        key: 'utm_source', value: utmSource
      }, {
        key: 'utm_medium', value: utmMedium
      }, {
        key: 'utm_campaign', value: utmCampaign
      }];

      if (jobId) {
        this.iframeUrl += '/' + jobId;
      }
      if (!this.iframeUrl.includes('?') && (utmSource || utmMedium || utmCampaign)) {
        this.iframeUrl += '?';
      }

      paramsArr.forEach((item) => {
        if (item.value) {
          this.iframeUrl += '&' + item.key + '=' + item.value;

        }

      });
      console.log('iframurl ', this.iframeUrl);
    });
  }

}
